import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-text',
    templateUrl: './publication-text.component.html',
    styleUrls: ['./publication-text.component.scss'],
    encapsulation: ViewEncapsulation.Native

})
export class PublicationTextComponent implements OnInit {

    @Input() publication: any;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
