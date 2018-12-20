import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-citizen-menu-header',
    templateUrl: './citizen-menu-header.component.html',
    styleUrls: ['./citizen-menu-header.component.scss']
})
export class CitizenMenuHeaderComponent implements OnInit {
    @Input() city: any = {};
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
