import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';
import {DesignModule} from '../../../design/design.module';

import {SharedAccountsIndexPage} from './shared-accounts-index.page';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';

const routes: Routes = [
    {
        path: '',
        component: SharedAccountsIndexPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DesignModule,
        RouterModule.forChild(routes),
        MecImageCacheDirectiveModule
    ],
    declarations: [SharedAccountsIndexPage]
})
export class SharedAccountsIndexPageModule {
}
