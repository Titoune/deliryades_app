import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {emailValidator, regexValidator, requiredValidator} from '../../../custom-validators';
import {AlertController, LoadingController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {environment} from '../../../../environments/environment';
import {AuthorizationsService} from '../../../services/authorizations.service';
import {DevicesService} from '../../../services/devices.service';

@Component({
    selector: 'app-public-login-form',
    templateUrl: './public-login-form.page.html',
    styleUrls: ['./public-login-form.page.scss'],
})
export class PublicLoginFormPage implements OnInit {

    create_form: FormGroup;
    environment = environment;

    constructor(
        public authService: AuthService,
        public toolsService: ToolsService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public authorizationsService: AuthorizationsService,
        public alertCtrl: AlertController,
        public devicesService: DevicesService
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.create_form = this.formBuilder.group({
            credential: [null, [requiredValidator]],
            password: [null, [requiredValidator]],
        }, {updateOn: 'submit'});
    }

    async submit() {

        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'connexion...'});
            await loading.present();

            const request = await <any>this.authService.public_setUserLoginForm(this.create_form.value);
            await loading.dismiss();
            if (request.code === 200) {
                this.authorizationsService.requestNotificationAuthorization().then(async () => {
                    await this.devicesService.user_setUpdateForm(this.toolsService.uuid, {
                        user_id: this.toolsService.payloads.user.id,
                        device_push_token: this.toolsService.device_push_token,
                        api: this.toolsService.api_version,
                        manufacturer: this.toolsService.manufacturer,
                        model: this.toolsService.model,
                        version: this.toolsService.version,
                        platform: this.toolsService.platform
                    });
                    await this.navCtrl.navigateRoot('/annuaire');
                });
            } else {
                ToolsService.generateServerValidationErrors(this.create_form, request);
            }
        }
    }

}
