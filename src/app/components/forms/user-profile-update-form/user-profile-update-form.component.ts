import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {dateValidator, inListValidator, lengthBetweenValidator, naturalNumberValidator, regexValidator, requiredValidator} from '../../../custom-validators';

@Component({
    selector: 'app-user-profile-update-form',
    templateUrl: './user-profile-update-form.component.html',
    styleUrls: ['./user-profile-update-form.component.scss']
})
export class UserProfileUpdateFormComponent implements OnInit {

    user: any = {};
    update_form: FormGroup;
    environment = environment;

    constructor(
        public userService: UsersService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
    ) {
    }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.user_getMe(this.toolsService.payloads.user.id).subscribe(request => {
            this.user = request.data.user;
            this.buildForm();
        });
    }

    buildForm() {
        this.update_form = this.formBuilder.group({
            sex: [this.user.sex, [requiredValidator, inListValidator(['m', 'f'])]],
            firstname: [this.user.firstname, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
            lastname: [this.user.lastname, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
            email: [this.user.email, [requiredValidator]],
            birth: [this.user.birth, [requiredValidator, dateValidator]],
            death: [this.user.death, [requiredValidator, dateValidator]],
            cellphone: [this.user.cellphone, [requiredValidator, regexValidator('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$', 'veuillez vérifier ce champs')]],
            phone: [this.user.phone, [requiredValidator, regexValidator('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$', 'veuillez vérifier ce champs')]],
            presentation: [this.user.presentation, [lengthBetweenValidator(2, 10000)]],
            branch: [this.user.branch, [lengthBetweenValidator(1, 8), naturalNumberValidator]],
            profession: [this.user.profession, [lengthBetweenValidator(1, 20)]]

        }, {updateOn: 'submit'});
    }


    async submit() {
        if (this.update_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.userService.user_setUpdateForm(this.user.id, this.update_form.value);

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
