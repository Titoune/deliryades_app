import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SharedMenuComponent} from './shared-menu.component';
import {DesignModule} from '../../../design/design.module';
import {RouterModule} from '@angular/router';
import {MecImageCacheDirectiveModule} from '../../../directives/mec-image-cache.directive.module';


@NgModule({
    imports: [
        RouterModule,
        DesignModule,
        CommonModule,
        IonicModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [SharedMenuComponent],
    exports: [SharedMenuComponent]
})

export class SharedMenuComponentModule {
}
