import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../directives/mec-image-cache.directive.module';
import {UserUserViewComponent} from './user-user-view.component';

const routes: Routes = [
    {
        path: '',
        component: UserUserViewComponent
    }];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        MecImageCacheDirectiveModule
    ],
    declarations: [UserUserViewComponent]
})

export class UserUserViewComponentModule {
}
