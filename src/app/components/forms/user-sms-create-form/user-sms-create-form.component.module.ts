import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {DesignModule} from '../../../design/design.module';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';
import {UserSmsCreateFormComponent} from './user-sms-create-form.component';

const routes: Routes = [
    {
        path: '',
        component: UserSmsCreateFormComponent
    }];

@NgModule({
    imports: [
        DesignModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [UserSmsCreateFormComponent]
})

export class UserSmsCreateFormComponentModule {
}
