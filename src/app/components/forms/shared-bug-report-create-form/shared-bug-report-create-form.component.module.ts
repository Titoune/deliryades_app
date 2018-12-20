import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {SharedBugReportCreateFormComponent} from './shared-bug-report-create-form.component';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';

const routes: Routes = [
    {
        path: '',
        component: SharedBugReportCreateFormComponent
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
    declarations: [SharedBugReportCreateFormComponent]
})

export class SharedBugReportCreateFormComponentModule {
}
