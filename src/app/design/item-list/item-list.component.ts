import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'mec-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class ItemListComponent implements OnInit {

    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
