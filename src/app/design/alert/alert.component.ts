import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'mec-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
export class AlertComponent implements OnInit {
    @Input() new = false;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
