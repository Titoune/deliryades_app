import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {RouterModule, Routes} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';
import {UserAddressUpdateFormComponent} from './user-address-update-form.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

const routes: Routes = [
    {
        path: '',
        component: UserAddressUpdateFormComponent
    }];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LeafletModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [UserAddressUpdateFormComponent]
})

export class UserAddressUpdateFormComponentModule {
}
