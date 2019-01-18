import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'mec-bar-result-percent',
    templateUrl: './bar-result-percent.component.html',
    styleUrls: ['./bar-result-percent.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class BarResultPercentComponent implements OnInit {

    @Input() score: number;
    @Input() total: number;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
