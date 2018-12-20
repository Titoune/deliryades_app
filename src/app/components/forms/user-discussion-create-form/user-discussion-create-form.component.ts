import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {DiscussionCommentsService} from '../../../services/discussion-comments.service';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {lengthBetweenValidator, requiredValidator} from '../../../custom-validators';

@Component({
    selector: 'app-user-discussion-create-form',
    templateUrl: './user-discussion-create-form.component.html',
    styleUrls: ['./user-discussion-create-form.component.scss']
})
export class UserDiscussionCreateFormComponent implements OnInit {

    @Input() user: any = {};
    create_form: FormGroup;
    users: any = [];
    environment = environment;

    constructor(
        public discussionCommentsService: DiscussionCommentsService,
        public usersService: UsersService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public toolsService: ToolsService,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController
    ) {
    }

    async ngOnInit() {
    }

    buildForm() {
        this.create_form = this.formBuilder.group({
            content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
            user_id: [this.user.id, [requiredValidator]],
        }, {updateOn: 'submit'});
    }

    async findRecipient(event) {

        const request = await <any>this.usersService.user_getUserByName({terms: event.target.value});
        if (request.code === 200) {
            this.users = request.data.users;
        }
    }

    async selectRecipient(user) {
        this.user = user;
        this.buildForm();
    }


    async submit() {
        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();
            const request = await <any>this.discussionCommentsService.user_setCreateForm(this.create_form.value);

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
