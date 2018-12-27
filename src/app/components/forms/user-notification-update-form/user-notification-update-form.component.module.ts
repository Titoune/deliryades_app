import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserNotificationUpdateFormComponent} from './user-notification-update-form.component';

const routes: Routes = [
    {
        path: '',
        component: UserNotificationUpdateFormComponent
    }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [UserNotificationUpdateFormComponent]
})

export class UserNotificationUpdateFormComponentModule {
}
