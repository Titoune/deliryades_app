import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {LoadingController, NavController} from '@ionic/angular';
import {emailValidator, requiredValidator} from '../../../custom-validators';
import {ToolsService} from '../../../services/tools.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-public-password-lost-form',
    templateUrl: './public-password-lost-form.page.html',
    styleUrls: ['./public-password-lost-form.page.scss'],
})
export class PublicPasswordLostFormPage implements OnInit {
    create_form: FormGroup;
    is_captcha_valid = false;
    environment = environment;

    constructor(
        public authService: AuthService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.create_form = this.formBuilder.group({
            email: [null, [requiredValidator, emailValidator]],
            recaptcha: [null, requiredValidator]
        }, {updateOn: 'submit'});
    }

    async submit() {

        if (this.create_form.valid && this.is_captcha_valid === true) {
            const loading = await this.loadingCtrl.create({message: 'traitement...'});
            await loading.present();

            const request = await <any>this.authService.public_setUserPasswordLostForm(this.create_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                await this.navCtrl.navigateRoot('/connexion');
            } else {
                this.is_captcha_valid = false;
                ToolsService.generateServerValidationErrors(this.create_form, request);
            }
        }
    }

}
