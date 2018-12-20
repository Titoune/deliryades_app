import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ToolsService} from '../../services/tools.service';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {UserDiscussionCreateFormComponent} from '../forms/user-discussion-create-form/user-discussion-create-form.component';

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
        public loadingCtrl: LoadingController
    ) {
    }

    ngOnInit() {
    }


    async showDiscussionCommentCreateFormModal() {
        const modal = await this.modalCtrl.create({
            component: UserDiscussionCreateFormComponent,
            componentProps: {user: this.user},
            backdropDismiss: false
        });
        return await modal.present();
    }

}
