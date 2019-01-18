import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-link',
    templateUrl: './publication-link.component.html',
    styleUrls: ['./publication-link.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
export class PublicationLinkComponent implements OnInit {

    @Input() publication: any;
    environment = environment;

    constructor() {
    }

    ngOnInit() {


    }

}
