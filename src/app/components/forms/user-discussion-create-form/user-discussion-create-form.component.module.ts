import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';
import {UserDiscussionCreateFormComponent} from './user-discussion-create-form.component';

const routes: Routes = [
    {
        path: '',
        component: UserDiscussionCreateFormComponent
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
    declarations: [UserDiscussionCreateFormComponent]
})

export class UserDiscussionCreateFormComponentModule {
}
