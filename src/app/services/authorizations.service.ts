import {Injectable} from '@angular/core';
import {ToolsService} from './tools.service';
import {FirebaseMessaging} from '@ionic-native/firebase-messaging/ngx';
import {Diagnostic} from '@ionic-native/diagnostic/ngx';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationsService {

    constructor(
        public toolsService: ToolsService,
        public firebaseMessaging: FirebaseMessaging,
        public diagnostic: Diagnostic,
    ) {
    }


    requestNotificationAuthorization() {
        return new Promise((resolve) => {
            if (['ios', 'android'].indexOf(this.toolsService.platform) !== -1) {
                if (this.toolsService.platform !== 'android') {
                    // alert('Nous avons besoin de votre permission pour vous envoyer des notifications');
                    this.firebaseMessaging.requestPermission().then(data => {
                        this.toolsService.authorization_notification = true;
                        resolve(true);
                    }, error => {
                        this.toolsService.authorization_notification = false;
                        resolve(true);
                    });
                } else {
                    this.toolsService.authorization_notification = true;
                    resolve(true);
                }
            } else {
                resolve(true);
            }
        });

    }


    requestCameraAuthorization() {
        return new Promise((resolve) => {

            if (['ios', 'android'].indexOf(this.toolsService.platform) !== -1) {
                this.requestExternalStorageAuthorization().then(res => {
                    if (res === true) {
                        if (this.toolsService.authorization_camera !== true) {
                            // alert('Nous avons besoin de votre permission accéder à la caméra');
                            this.diagnostic.requestCameraAuthorization().then(data => {
                                if (data === 'authorized' || data === 'GRANTED' || data === 'DENIED_ALWAYS') {
                                    this.toolsService.authorization_camera = true;
                                    resolve(true);
                                } else {
                                    this.toolsService.authorization_camera = false;
                                }

                            }, error => {
                                console.error(error);
                                resolve(false);
                            });
                        } else {
                            resolve(true);
                        }
                    } else {
                        resolve(false);
                    }
                });
            } else {
                resolve(true);
            }
        });
    }

    requestMicrophoneAuthorization() {
        return new Promise((resolve) => {

            if (['ios', 'android'].indexOf(this.toolsService.platform) !== -1) {
                if (this.toolsService.authorization_microphone !== true) {
                    // alert('Nous avons besoin de votre permission accéder au micro');
                    this.diagnostic.requestMicrophoneAuthorization().then(data => {
                        if (data === 'authorized' || data.RECORD_AUDIO === 'GRANTED') {
                            this.toolsService.authorization_microphone = true;
                            resolve(true);
                        } else {
                            this.toolsService.authorization_microphone = false;
                            resolve(false);
                        }
                    }, error => {
                        console.error(error);
                        resolve(false);
                    });
                } else {
                    resolve(true);
                }
            } else {
                resolve(true);
            }
        });
    }

    requestExternalStorageAuthorization() {
        return new Promise((resolve) => {

            if (['ios', 'android'].indexOf(this.toolsService.platform) !== -1) {
                if (this.toolsService.authorization_external_storage !== true) {
                    // alert('Nous avons besoin de votre permission accéder à vos photos');

                    if (this.toolsService.platform === 'ios') {
                        this.diagnostic.requestCameraRollAuthorization().then(data => {
                            if (data === 'authorized') {
                                this.toolsService.authorization_external_storage = true;
                                resolve(true);
                            } else {
                                this.toolsService.authorization_external_storage = false;
                                resolve(false);
                            }
                        }, error => {
                            console.error(error);
                            resolve(false);
                        });
                    } else {
                        this.diagnostic.requestExternalStorageAuthorization().then(data => {
                            if (data === 'authorized' || data.READ_EXTERNAL_STORAGE === 'GRANTED') {
                                this.toolsService.authorization_external_storage = true;
                                resolve(true);
                            } else {
                                this.toolsService.authorization_external_storage = false;
                                resolve(false);
                            }
                        }, error => {
                            console.error(error);
                            resolve(false);
                        });
                    }


                } else {
                    resolve(true);
                }
            } else {
                resolve(true);
            }
        });
    }


    requestLocationAuthorization() {
        return new Promise((resolve) => {

            if (['ios', 'android'].indexOf(this.toolsService.platform) !== -1) {
                if (this.toolsService.authorization_location !== true) {
                    // alert('Nous avons besoin de votre permission accéder à votre position');
                    this.diagnostic.requestLocationAuthorization().then(data => {
                        if (data === 'authorized_when_in_use' || data === 'GRANTED') {
                            this.toolsService.authorization_location = true;
                            resolve(true);
                        } else {
                            this.toolsService.authorization_location = false;
                            resolve(false);
                        }
                    }, error => {
                        console.error(error);
                        resolve(false);
                    });
                } else {
                    resolve(true);
                }
            } else {
                resolve(true);
            }
        });
    }
}
