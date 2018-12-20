import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PublicPasswordLostFormPage} from './public-password-lost-form.page';
import {NgxCaptchaModule} from 'ngx-captcha';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';

const routes: Routes = [
    {
        path: '',
        component: PublicPasswordLostFormPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgxCaptchaModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [PublicPasswordLostFormPage]
})
export class PublicPasswordLostFormPageModule {
}
