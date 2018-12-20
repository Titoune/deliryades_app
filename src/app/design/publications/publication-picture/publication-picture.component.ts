import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-picture',
    templateUrl: './publication-picture.component.html',
    styleUrls: ['./publication-picture.component.scss'],
    encapsulation: ViewEncapsulation.Native

})
export class PublicationPictureComponent implements OnInit {

    @Input() publication: any;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
        if (this.publication.pictures.length > 1) {
        }

    }

}
