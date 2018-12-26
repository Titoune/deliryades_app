import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ToolsService} from '../../services/tools.service';
import {ActionSheetController, AlertController, LoadingController, ModalController} from '@ionic/angular';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {UserSmsCreateFormComponent} from '../forms/user-sms-create-form/user-sms-create-form.component';
import {CallNumber} from '@ionic-native/call-number/ngx';

@Component({
    selector: 'app-user-user-view',
    templateUrl: './user-user-view.component.html',
    styleUrls: ['./user-user-view.component.scss']
})
export class UserUserViewComponent implements OnInit {

    @Input() user: any = {};
    environment = environment;

    constructor(
        public toolsService: ToolsService,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private emailComposer: EmailComposer,
        private callNumber: CallNumber,
        public actionSheetCtrl: ActionSheetController
    ) {
    }

    ngOnInit() {
    }

    async showSmsCreateFormModal() {
        const modal = await this.modalCtrl.create({
            component: UserSmsCreateFormComponent,
            componentProps: {user: this.user},
            backdropDismiss: false
        });
        return await modal.present();
    }

    async sendEmail() {
        this.emailComposer.isAvailable().then((available: boolean) => {
            if (available) {
                const email = {
                    to: this.user.email,
                    subject: '',
                    body: '',
                    isHtml: false
                };
                this.emailComposer.open(email);
            }
        });
    }

    async loadCallActionSheet() {
        const options = [];

        if (this.user.cellphone) {
            options.push({
                text: this.user.cellphone,
                role: 'destructive',

                handler: async () => {
                    await this.call(this.user.cellphone);
                }
            });
        }

        if (this.user.phone) {
            options.push({
                text: this.user.phone,
                role: 'destructive',

                handler: async () => {
                    await this.call(this.user.phone);
                }
            });
        }

        options.push({
            text: 'Annuler',
            role: 'cancel',

            handler: () => {
            }
        });


        const actionSheet = await this.actionSheetCtrl.create({
            // overlayIndex: 10,
            header: 'Actions',
            buttons: options
        });
        await actionSheet.present();
    }


    async call(number) {
        this.callNumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
}
