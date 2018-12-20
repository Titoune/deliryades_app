import {Component, OnInit} from '@angular/core';
import {SharedProfileUpdateFormComponent} from '../../../components/forms/shared-profile-update-form/shared-profile-update-form.component';
import {ModalController} from '@ionic/angular';
import {SharedBugReportCreateFormComponent} from '../../../components/forms/shared-bug-report-create-form/shared-bug-report-create-form.component';
import {SharedAppAuthorizationsComponent} from '../../../components/forms/shared-app-authorizations/shared-app-authorizations.component';
import {environment} from '../../../../environments/environment';
import {SharedPasswordUpdateFormComponent} from '../../../components/forms/shared-password-update-form/shared-password-update-form.component';

@Component({
    selector: 'app-shared-parameters-index',
    templateUrl: './shared-parameters-index.page.html',
    styleUrls: ['./shared-parameters-index.page.scss'],
})
export class SharedParametersIndexPage implements OnInit {
    environment = environment;

    constructor(public modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    async showUserUpdateFormModal() {
        const modal = await this.modalCtrl.create({
            component: SharedProfileUpdateFormComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }

    async showPasswordUpdateFormModal() {
        const modal = await this.modalCtrl.create({
            component: SharedPasswordUpdateFormComponent,
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
