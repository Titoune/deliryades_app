import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-social-bar',
    templateUrl: './publication-social-bar.component.html',
    styleUrls: ['./publication-social-bar.component.scss'],
    encapsulation: ViewEncapsulation.Native

})
export class PublicationSocialBarComponent implements OnInit {
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
