import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-diffusion',
    templateUrl: './publication-diffusion.component.html',
    styleUrls: ['./publication-diffusion.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
/**
 *  Display message if publication diffusion
 */
export class PublicationDiffusionComponent implements OnInit {


    /**
     * is publication.publication_diffusion
     */
    @Input() publicationDiffusion: any;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
