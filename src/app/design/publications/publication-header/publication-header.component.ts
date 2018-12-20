import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-header',
    templateUrl: './publication-header.component.html',
    styleUrls: ['./publication-header.component.scss'],
    encapsulation: ViewEncapsulation.Native

})
export class PublicationHeaderComponent implements OnInit {
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
