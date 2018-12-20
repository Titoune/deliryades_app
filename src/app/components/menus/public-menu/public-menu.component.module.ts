import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {PublicMenuComponent} from './public-menu.component';
import {DesignModule} from '../../../design/design.module';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';


@NgModule({
    imports: [
        DesignModule,
        CommonModule,
        IonicModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [PublicMenuComponent],
    exports: [PublicMenuComponent]
})

export class PublicMenuComponentModule {
}
