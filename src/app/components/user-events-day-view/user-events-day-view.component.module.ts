import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../directives/mec-image-cache.directive.module';
import {UserEventsDayViewComponent} from './user-events-day-view.component';

const routes: Routes = [
    {
        path: '',
        component: UserEventsDayViewComponent
    }];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        MecImageCacheDirectiveModule
    ],
    declarations: [UserEventsDayViewComponent]
})

export class UserEventsDayViewComponentModule {
}
