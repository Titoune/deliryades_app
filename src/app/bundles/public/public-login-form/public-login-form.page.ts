import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {emailValidator, requiredValidator} from '../../../custom-validators';
import {LoadingController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {environment} from '../../../../environments/environment';

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
                await this.navCtrl.navigateRoot('/comptes');
            } else {
                ToolsService.generateServerValidationErrors(this.create_form, request);
            }
        }
    }
}
