import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {lengthBetweenValidator, matchValidator, regexValidator, requiredValidator} from '../../../custom-validators';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-shared-password-update-form',
    templateUrl: './shared-password-update-form.component.html',
    styleUrls: ['./shared-password-update-form.component.scss']
})
export class SharedPasswordUpdateFormComponent implements OnInit {
    update_form: FormGroup;
    environment = environment;

    constructor(
        public userService: UsersService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.update_form = this.formBuilder.group({
            password1: [null, [requiredValidator, lengthBetweenValidator(4, 40)]],
            password2: [null, [requiredValidator, matchValidator('password1', 'mot de passe')]]
        }, {updateOn: 'submit'});
    }


    async submit() {
        if (this.update_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.userService.user_setPasswordUpdateForm(this.toolsService.payloads.user.id, this.update_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                await this.modalCtrl.dismiss();
            } else {
                ToolsService.generateServerValidationErrors(this.update_form, request);
            }
        }
    }

    async cancelForm() {
        if (this.update_form && this.update_form.dirty === true) {
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
