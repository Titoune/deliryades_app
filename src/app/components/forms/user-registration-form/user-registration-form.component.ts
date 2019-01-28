import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {booleanValidator, emailValidator, inListValidator, lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {AuthService} from '../../../services/auth.service';
import {PublicWebsiteTermsOfUseComponent} from '../../public-website-terms-of-use/public-website-terms-of-use.component';

@Component({
    selector: 'app-user-registration-form',
    templateUrl: './user-registration-form.component.html',
    styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {


    user: any = {};
    create_form: FormGroup;
    environment = environment;
    moment = moment;
    prefix = [];

    constructor(
        public authService: AuthService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }


    buildForm() {
        this.create_form = this.formBuilder.group({
            sex: [null, [requiredValidator, inListValidator(['m', 'f'])]],
            firstname: [null, [requiredValidator, lengthBetweenValidator(2, 45)]],
            lastname: [null, [requiredValidator, lengthBetweenValidator(2, 45)]],
            email: [null, [requiredValidator, emailValidator]],
            password1: [null, [requiredValidator, lengthBetweenValidator(4, 45)]],
            password2: [null, [requiredValidator, lengthBetweenValidator(4, 45)]],
            is_website_terms_of_use_accepted: [null, [requiredValidator, booleanValidator]],
            code: [null, [lengthBetweenValidator(2, 255)]],

        }, {updateOn: 'submit'});
    }

    async submit() {
        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'validation...'});
            await loading.present();

            const request = await <any>this.authService.public_setRegistrationForm(this.create_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                await this.modalCtrl.dismiss();
            } else {
                ToolsService.generateServerValidationErrors(this.create_form, request);
            }
        }
    }

    async showWebsiteTermsOfUseModal() {
        const modal = await this.modalCtrl.create({
            component: PublicWebsiteTermsOfUseComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }

    async cancelForm() {
        if (this.create_form && this.create_form.dirty === true) {
            const alert = await this.alertCtrl.create({
                header: 'Voulez-vous vraiment quitter le formulaire ?',
                message: 'Toutes les données saisies seront perdues, voulez-vous vraiment annuler cette opération ?',
                buttons: [
                    {
                        text: 'Non',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'Oui',
                        handler: async () => {
                            await this.modalCtrl.dismiss();
                        }
                    }
                ]
            });

            await alert.present();
        } else {
            await this.modalCtrl.dismiss();
        }
    }


}
