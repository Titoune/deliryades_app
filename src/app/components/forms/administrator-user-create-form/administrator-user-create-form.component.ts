import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {booleanValidator, dateValidator, lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {UsersService} from '../../../services/users.service';

@Component({
    selector: 'app-administrator-user-create-form',
    templateUrl: './administrator-user-create-form.component.html',
    styleUrls: ['./administrator-user-create-form.component.scss']
})
export class AdministratorUserCreateFormComponent implements OnInit {

    environment = environment;
    moment = moment;
    create_form: FormGroup;

    constructor(
        public usersService: UsersService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public toolsService: ToolsService,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }


    buildForm() {
        this.create_form = this.formBuilder.group({
            title: new FormControl(null, [requiredValidator, lengthBetweenValidator(2, 10000)]),
            question: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
            description: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
            expiration: [moment().add(1, 'M').format(), [requiredValidator, dateValidator]],
            activated: [true, [booleanValidator]],
            poll_proposals: this.formBuilder.array([
                this.formBuilder.group({
                    content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]]
                }),
                this.formBuilder.group({
                    content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]]
                })
            ])
        }, {updateOn: 'submit'});

    }

    async submit() {
        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.usersService.administrator_setCreateForm(this.create_form.value);

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
