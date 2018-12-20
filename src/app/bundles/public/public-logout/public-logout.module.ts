import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PublicLogoutPage} from './public-logout.page';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';

const routes: Routes = [
    {
        path: '',
        component: PublicLogoutPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MecImageCacheDirectiveModule
    ],
    declarations: [PublicLogoutPage]
})
export class PublicLogoutPageModule {
}
