import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-video',
    templateUrl: './publication-video.component.html',
    styleUrls: ['./publication-video.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
export class PublicationVideoComponent implements OnInit {

    @Input() publication: any;
    environment = environment;

    constructor(private domSanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

}
