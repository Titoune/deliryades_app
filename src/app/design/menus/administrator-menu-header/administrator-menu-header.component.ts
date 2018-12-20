import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-administrator-menu-header',
    templateUrl: './administrator-menu-header.component.html',
    styleUrls: ['./administrator-menu-header.component.scss']
})
export class AdministratorMenuHeaderComponent implements OnInit {
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
