import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'mec-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent implements OnInit {
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
