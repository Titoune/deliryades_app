import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'mec-header-publication',
    templateUrl: './mec-header-publication.component.html',
    styleUrls: ['./mec-header-publication.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class MecHeaderPublicationComponent implements OnInit {

    @Input() cityWithUser;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
