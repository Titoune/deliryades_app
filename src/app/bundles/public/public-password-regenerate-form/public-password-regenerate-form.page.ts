import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {lengthBetweenValidator, matchValidator, regexValidator, requiredValidator} from '../../../custom-validators';
import {AuthService} from '../../../services/auth.service';
import {LoadingController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-public-password-regenerate-form',
    templateUrl: './public-password-regenerate-form.page.html',
    styleUrls: ['./public-password-regenerate-form.page.scss'],
})
export class PublicPasswordRegenerateFormPage implements OnInit {
    user: any;
    update_form: FormGroup;
    environment = environment;

    constructor(
        public authService: AuthService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        private route: ActivatedRoute
    ) {
    }


    async ngOnInit() {
        this.checkPasswordRegenerateLink();
    }

    buildForm() {
        this.update_form = this.formBuilder.group({
            password1: [null, [requiredValidator, regexValidator('^(?=.*[A-z])(?=.*[A-Z])(?=.*[0-9])\\S{8,30}$', 'Votre mot de passe doit comporter au moins 1 majuscule, 1 minucule et 1 chiffre'), lengthBetweenValidator(8, 30)]],
            password2: [null, [requiredValidator, matchValidator('password1', 'mot de passe')]]
        }, {updateOn: 'submit'});
    }

    async checkPasswordRegenerateLink() {
        const request = await <any>this.authService.public_checkPasswordRegenerateLink({
            email: this.route.snapshot.paramMap.get('email'),
            token: this.route.snapshot.paramMap.get('token')
        });
        if (request.code === 200) {
            this.user = request.data.user;
            this.buildForm();
        }
    }


    async submit() {

        if (this.update_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'traitement...'});
            await loading.present();

            const request = await <any>this.authService.public_setUserPasswordRegenerateForm({
                    password1: this.update_form.value.password1,
                    email: this.route.snapshot.paramMap.get('email'),
                    token: this.route.snapshot.paramMap.get('token')
                }
            );

            await loading.dismiss();

            if (request.code === 200) {
                await this.navCtrl.navigateRoot('/connexion');
            } else {
                ToolsService.generateServerValidationErrors(this.update_form, request);
            }
        }
    }

}
