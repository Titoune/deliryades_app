import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../directives/mec-image-cache.directive.module';
import {SharedNotificationUpdateFormComponent} from './shared-notification-update-form.component';

const routes: Routes = [
    {
        path: '',
        component: SharedNotificationUpdateFormComponent
    }];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        MecImageCacheDirectiveModule
    ],
    declarations: [SharedNotificationUpdateFormComponent]
})

export class SharedNotificationUpdateFormComponentModule {
}
