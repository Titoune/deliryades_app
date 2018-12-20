import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';
import {UserEventCreateFormComponent} from './user-event-create-form.component';

const routes: Routes = [
    {
        path: '',
        component: UserEventCreateFormComponent
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
    declarations: [UserEventCreateFormComponent]
})

export class UserEventCreateFormComponentModule {
}
