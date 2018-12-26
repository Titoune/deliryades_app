import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {PollsService} from '../../../services/polls.service';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {SMS} from '@ionic-native/sms/ngx';

@Component({
    selector: 'app-user-sms-create-form',
    templateUrl: './user-sms-create-form.component.html',
    styleUrls: ['./user-sms-create-form.component.scss']
})
export class UserSmsCreateFormComponent implements OnInit {

    @Input() user: any = {};
    environment = environment;
    moment = moment;
    create_form: FormGroup;

    constructor(
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public toolsService: ToolsService,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        private sms: SMS
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }


    buildForm() {
        this.create_form = this.formBuilder.group({
            content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
        }, {updateOn: 'submit'});

    }


    async submit() {
        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'envoi...'});
            await loading.present();

            this.sms.send(this.user.cellphone, this.create_form.value.content);

            await loading.dismiss();
            await this.modalCtrl.dismiss();
            console.log('message envoyé');
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
