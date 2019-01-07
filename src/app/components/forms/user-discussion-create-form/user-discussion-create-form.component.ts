import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';

@Component({
    selector: 'app-user-discussion-create-form',
    templateUrl: './user-discussion-create-form.component.html',
    styleUrls: ['./user-discussion-create-form.component.scss']
})
export class UserDiscussionCreateFormComponent implements OnInit {

    users: any = [];
    environment = environment;

    constructor(
        public usersService: UsersService,
        public loadingCtrl: LoadingController,
        public toolsService: ToolsService,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        public navCtrl: NavController
    ) {
    }

    async ngOnInit() {
    }

    async findRecipient(event) {
        const request = await <any>this.usersService.user_getUserByName({terms: event.target.value});
        if (request.code === 200) {
            this.users = request.data.users;
        }
    }

    async selectRecipient(user) {
        await this.modalCtrl.dismiss();
        await this.navCtrl.navigateRoot('/messages/voir/' + user.id);
    }


}
