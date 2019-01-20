import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {booleanValidator} from '../../../custom-validators';
import {DevicesService} from '../../../services/devices.service';

@Component({
    selector: 'app-user-notification-update-form',
    templateUrl: './user-notification-update-form.component.html',
    styleUrls: ['./user-notification-update-form.component.scss']
})
export class UserNotificationUpdateFormComponent implements OnInit {


    user: any = {};
    update_form: FormGroup;
    environment = environment;

    constructor(
        public usersService: UsersService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public devicesService: DevicesService,
    ) {
    }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.usersService.user_getMe(this.toolsService.payloads.user.id).subscribe(request => {
            this.user = request.data.user;
        });
    }

    async updateUserField(field) {
        await <any>this.usersService.user_setUserField({[field]: this.user[field]});
    }
}
