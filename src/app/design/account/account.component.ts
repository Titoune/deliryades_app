import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'mec-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class AccountComponent implements OnInit {
    @Input() account: any;
    @Input() type: string;

    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
