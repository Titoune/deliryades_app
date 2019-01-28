import {Component} from '@angular/core';

import {AlertController, Events, NavController, Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ToolsService} from './services/tools.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../environments/environment';
import {FirebaseDynamicLinks} from '@ionic-native/firebase-dynamic-links/ngx';
import {Diagnostic} from '@ionic-native/diagnostic/ngx';
import {MobileAccessibility} from '@ionic-native/mobile-accessibility/ngx';
import {SocketService} from './services/socket.service';
import {Plugins} from '@capacitor/core';
import {DevicesService} from './services/devices.service';
import {FirebaseMessaging} from '@ionic-native/firebase-messaging/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {AuthorizationsService} from './services/authorizations.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(
        private platform: Platform,
        private statusBar: StatusBar,
        public toolsService: ToolsService,
        private socketService: SocketService,
        public navCtrl: NavController,
        public firebaseDynamicLinks: FirebaseDynamicLinks,
        public diagnostic: Diagnostic,
        private mobileAccessibility: MobileAccessibility,
        private alertCtrl: AlertController,
        public events: Events,
        public devicesService: DevicesService,
        public firebaseMessaging: FirebaseMessaging,
        private splashScreen: SplashScreen,
        public authorizationsServices: AuthorizationsService
    ) {
        platform.pause.subscribe(() => {
            console.log('platforme pause');
            this.events.publish('platform-pause', true);
            this.socketService.disconnect();
        });

        platform.resume.subscribe(() => {
            console.log('platform resume');
            this.events.publish('platform-resume', true);
        });

        this.initializeApp();
    }

    async initializeApp() {
        await this.platform.ready();
        console.log('platform ready');

        this.mobileAccessibility.usePreferredTextZoom(false);
        this.statusBar.styleDefault();
        await this.initializeTools();
        await this.getDeviceToken();
        await this.initializeDynamicLinks();
        await this.initializeAuthorizations();
        await this.initializeBackButton();
        this.splashScreen.hide();
        if ('user' in this.toolsService.payloads) {
            this.updateDevice();
            this.authorizationsServices.requestNotificationAuthorization();
        }
    }

    async initializeTools() {
        return new Promise((resolve) => {
            this.toolsService.jwt = localStorage.getItem('jwt');
            this.toolsService.socket_jwt = localStorage.getItem('socket_jwt');
            if (this.toolsService.jwt) {
                this.toolsService.payloads = new JwtHelperService().decodeToken(this.toolsService.jwt);
            }

            const {Device} = Plugins;
            Device.getInfo().then(res => {
                this.toolsService.platform = res.platform.toLowerCase();
                this.toolsService.manufacturer = res.manufacturer;
                this.toolsService.model = res.model;
                this.toolsService.version = res.osVersion;
                this.toolsService.uuid = res.uuid;
                this.toolsService.api_version = environment.api_version;
                resolve();
            }).catch(err => console.log(err));
        });
    }

    async updateDevice() {
        await this.devicesService.user_setUpdateForm(this.toolsService.uuid, {
            user_id: this.toolsService.payloads.user.id,
            device_push_token: this.toolsService.device_push_token,
            api: this.toolsService.api_version,
            manufacturer: this.toolsService.manufacturer,
            model: this.toolsService.model,
            version: this.toolsService.version,
            platform: this.toolsService.platform
        });
    }

    async getDeviceToken() {
        return new Promise((resolve) => {
            this.firebaseMessaging.getToken().then(token => {
                this.toolsService.device_push_token = token;
                resolve();
            }).catch(error => {
                resolve();
                console.error('Error getting token', error);
            });
        });
    }


    async initializeDynamicLinks() {
        this.firebaseDynamicLinks.onDynamicLink()
            .subscribe((res: any) => {
                const query_params: any = ToolsService.extractUrlParams(res.deepLink);
                if (res.deepLink.indexOf('/auth/generate-password') !== -1) {
                    this.navCtrl.navigateRoot('/nouveau-mot-de-passe/' + query_params.email + '/' + query_params.token);
                } else if (res.deepLink.indexOf('/auth/email-validation') !== -1) {
                    this.navCtrl.navigateRoot('/validation/' + query_params.email + '/' + query_params.token);
                } else if (res.deepLink.indexOf('/auth/registration') !== -1) {
                    this.navCtrl.navigateRoot('/inscription');
                }
            }, (error: any) => {
                console.log(error);
            });
    }

    async initializeAuthorizations() {
        let response = await <any>this.diagnostic.isLocationAuthorized();
        this.toolsService.authorization_location = JSON.stringify(response) === 'true';

        response = await <any>this.diagnostic.isMicrophoneAuthorized();
        this.toolsService.authorization_microphone = JSON.stringify(response) === 'true';

        response = await <any>this.diagnostic.isCameraAuthorized();
        this.toolsService.authorization_camera = JSON.stringify(response) === 'true';

        response = await <any>this.diagnostic.isRemoteNotificationsEnabled();
        this.toolsService.authorization_notification = JSON.stringify(response) === 'true';

        if (this.toolsService.platform === 'ios') {
            response = await <any>this.diagnostic.isCameraRollAuthorized();
            this.toolsService.authorization_external_storage = JSON.stringify(response) === 'true';
        } else {
            response = await <any>this.diagnostic.isExternalStorageAuthorized();
            this.toolsService.authorization_external_storage = JSON.stringify(response) === 'true';
        }
    }

    async initializeBackButton() {

        this.platform.backButton.subscribe(async ($event) => {
            const alert = await this.alertCtrl.create({
                message: 'Quitter',
                subHeader: 'Voulez-vous quitter l\'application ?',
                buttons: [
                    {
                        text: 'Non',
                        handler: () => {

                        }
                    },
                    {
                        text: 'Oui',
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }
                ]
            });

            await alert.present();
        });
    }
}
