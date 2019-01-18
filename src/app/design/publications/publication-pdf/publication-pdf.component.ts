import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-pdf',
    templateUrl: './publication-pdf.component.html',
    styleUrls: ['./publication-pdf.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
export class PublicationPdfComponent implements OnInit {

    @Input() publication: any;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
