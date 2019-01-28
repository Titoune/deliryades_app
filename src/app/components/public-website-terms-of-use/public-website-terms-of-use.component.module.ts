import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../directives/mec-image-cache.directive.module';
import {PublicWebsiteTermsOfUseComponent} from './public-website-terms-of-use.component';

const routes: Routes = [
    {
        path: '',
        component: PublicWebsiteTermsOfUseComponent
    }];

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild(routes),
        MecImageCacheDirectiveModule
    ],
    declarations: [PublicWebsiteTermsOfUseComponent]
})

export class PublicWebsiteTermsOfUseComponentModule {
}
