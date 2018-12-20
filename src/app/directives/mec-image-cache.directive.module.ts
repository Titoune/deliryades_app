import {NgModule} from '@angular/core';
import {MecImageCacheDirective} from './mec-image-cache.directive';


@NgModule({
    declarations: [MecImageCacheDirective],
    exports: [
        MecImageCacheDirective
    ]
})
export class MecImageCacheDirectiveModule {

}
