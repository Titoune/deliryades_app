import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {AdministratorMenuComponent} from './administrator-menu.component';
import {DesignModule} from '../../../design/design.module';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';


@NgModule({
    imports: [
        DesignModule,
        CommonModule,
        IonicModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [AdministratorMenuComponent],
    exports: [AdministratorMenuComponent]
})

export class AdministratorMenuComponentModule {
}
