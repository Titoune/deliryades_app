import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {emailValidator, requiredValidator} from '../../../custom-validators';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-registration-code-form',
    templateUrl: './registration-code-form.component.html',
    styleUrls: ['./registration-code-form.component.scss']
})
export class RegistrationCodeFormComponent implements OnInit {

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
            email: [null, [emailValidator, requiredValidator]]
        }, {updateOn: 'submit'});
    }


    async submit() {
        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.authService.user_sendRegistrationCode(this.create_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                await this.modalCtrl.dismiss();
            } else {
                ToolsService.generateServerValidationErrors(this.create_form, request);
            }
        }
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
