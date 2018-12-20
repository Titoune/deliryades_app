import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-public-menu',
    templateUrl: './public-menu.component.html',
    styleUrls: ['./public-menu.component.scss']
})
export class PublicMenuComponent implements OnInit {
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
