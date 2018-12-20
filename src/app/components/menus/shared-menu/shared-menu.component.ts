import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-shared-menu',
    templateUrl: './shared-menu.component.html',
    styleUrls: ['./shared-menu.component.scss']
})
export class SharedMenuComponent implements OnInit {
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
