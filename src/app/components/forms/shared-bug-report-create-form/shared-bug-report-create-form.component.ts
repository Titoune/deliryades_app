import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {ConfigurationsService} from '../../../services/configurations.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-shared-bug-report-create-form',
    templateUrl: './shared-bug-report-create-form.component.html',
    styleUrls: ['./shared-bug-report-create-form.component.scss']
})
export class SharedBugReportCreateFormComponent implements OnInit {
    create_form: FormGroup;
    environment = environment;

    constructor(
        public configurationsService: ConfigurationsService,
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
            content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]]
        }, {updateOn: 'submit'});
    }

    async submit() {
        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.configurationsService.shared_setBugReportCreateForm({
                content: this.create_form.value.content,
                payloads: this.toolsService.payloads,
                jwt: this.toolsService.jwt,
                platform: this.toolsService.platform,
                version: this.toolsService.version,
                device_push_token: this.toolsService.device_push_token,
                uuid: this.toolsService.uuid,
                manufacturer: this.toolsService.manufacturer,
                model: this.toolsService.model
            });

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
