import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {DesignModule} from '../../../design/design.module';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';
import {UserMenuComponent} from './user-menu.component';


@NgModule({
    imports: [
        DesignModule,
        CommonModule,
        IonicModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [UserMenuComponent],
    exports: [UserMenuComponent]
})

export class UserMenuComponentModule {
}
