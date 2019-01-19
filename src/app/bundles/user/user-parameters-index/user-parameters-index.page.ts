import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {SharedPasswordUpdateFormComponent} from '../../../components/forms/shared-password-update-form/shared-password-update-form.component';
import {SharedBugReportCreateFormComponent} from '../../../components/forms/shared-bug-report-create-form/shared-bug-report-create-form.component';
import {SharedAppAuthorizationsComponent} from '../../../components/forms/shared-app-authorizations/shared-app-authorizations.component';
import {UserNotificationUpdateFormComponent} from '../../../components/forms/user-notification-update-form/user-notification-update-form.component';
import {UserProfileUpdateFormComponent} from '../../../components/forms/user-profile-update-form/user-profile-update-form.component';
import {UserAddressUpdateFormComponent} from '../../../components/forms/user-address-update-form/user-address-update-form.component';

@Component({
    selector: 'app-user-parameters-index',
    templateUrl: './user-parameters-index.page.html',
    styleUrls: ['./user-parameters-index.page.scss'],
})
export class UserParametersIndexPage implements OnInit {

    environment = environment;

    constructor(public modalCtrl: ModalController, public toolsService: ToolsService) {
    }

    ngOnInit() {
    }

    async showPasswordUpdateFormModal() {
        const modal = await this.modalCtrl.create({
            component: SharedPasswordUpdateFormComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }

    async showAddressUpdateFormModal() {
        const modal = await this.modalCtrl.create({
            component: UserAddressUpdateFormComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }


    async showProfilUpdateFormModal() {
        const modal = await this.modalCtrl.create({
            component: UserProfileUpdateFormComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }


    async showNotificationsUpdateFormModal() {
        const modal = await this.modalCtrl.create({
            component: UserNotificationUpdateFormComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }

    async showBugReportCreateFormModal() {
        const modal = await this.modalCtrl.create({
            component: SharedBugReportCreateFormComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }

    async showAppAuthorizationsModal() {
        const modal = await this.modalCtrl.create({
            component: SharedAppAuthorizationsComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }


}
