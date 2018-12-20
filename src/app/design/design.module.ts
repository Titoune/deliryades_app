import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

import {MenuComponent} from './menus/menu/menu.component';
import {MenuFooterComponent} from './menus/menu-footer/menu-footer.component';
import {CardComponent} from './card/card.component';
import {PublicationPictureComponent} from './publications/publication-picture/publication-picture.component';
import {PublicationHeaderComponent} from './publications/publication-header/publication-header.component';
import {PublicationDiffusionComponent} from './publications/publication-diffusion/publication-diffusion.component';
import {PublicationSocialBarComponent} from './publications/publication-social-bar/publication-social-bar.component';
import {PublicationPdfComponent} from './publications/publication-pdf/publication-pdf.component';
import {PublicationLinkComponent} from './publications/publication-link/publication-link.component';
import {PublicationTextComponent} from './publications/publication-text/publication-text.component';
import {PublicationVideoComponent} from './publications/publication-video/publication-video.component';
import {PollComponent} from './polls/poll/poll.component';
import {BarResultPercentComponent} from './bar-result-percent/bar-result-percent.component';
import {AccountComponent} from './account/account.component';
import {ItemListComponent} from './item-list/item-list.component';
import {CitizenMenuHeaderComponent} from './menus/citizen-menu-header/citizen-menu-header.component';
import {AdministratorMenuHeaderComponent} from './menus/administrator-menu-header/administrator-menu-header.component';
import {PublicationCommentComponent} from './publications/publication-comment/publication-comment.component';
import {RouterModule} from '@angular/router';
import {MecHeaderPublicationComponent} from './mec-header-publication/mec-header-publication.component';
import {MecWidgetComponent} from './mec-widget/mec-widget.component';
import {AlertComponent} from './alert/alert.component';
import {MecImageCacheDirectiveModule} from '../directives/mec-image-cache.directive.module';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
        MecImageCacheDirectiveModule
    ],
    declarations: [
        AdministratorMenuHeaderComponent,
        CitizenMenuHeaderComponent,
        MenuComponent,
        MenuFooterComponent,
        CardComponent,
        PublicationPictureComponent,
        PublicationHeaderComponent,
        PublicationDiffusionComponent,
        PublicationSocialBarComponent,
        PublicationPdfComponent,
        PublicationLinkComponent,
        PublicationTextComponent,
        PublicationVideoComponent,
        PollComponent,
        BarResultPercentComponent,
        AccountComponent,
        ItemListComponent,
        PublicationCommentComponent,
        MecHeaderPublicationComponent,
        MecWidgetComponent,
        AlertComponent
    ],
    exports: [
        AdministratorMenuHeaderComponent,
        CitizenMenuHeaderComponent,
        MenuComponent,
        MenuFooterComponent,
        CardComponent,
        PublicationPictureComponent,
        PublicationHeaderComponent,
        PublicationDiffusionComponent,
        PublicationSocialBarComponent,
        PublicationPdfComponent,
        PublicationLinkComponent,
        PublicationTextComponent,
        PublicationVideoComponent,
        PollComponent,
        BarResultPercentComponent,
        AccountComponent,
        ItemListComponent,
        PublicationCommentComponent,
        MecHeaderPublicationComponent,
        MecWidgetComponent,
        AlertComponent
    ],

})
export class DesignModule {
}
