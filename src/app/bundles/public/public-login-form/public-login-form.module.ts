import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {PublicLoginFormPage} from './public-login-form.page';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';

const routes: Routes = [
    {
        path: '',
        component: PublicLoginFormPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [PublicLoginFormPage]
})
export class PublicLoginFormPageModule {
}
