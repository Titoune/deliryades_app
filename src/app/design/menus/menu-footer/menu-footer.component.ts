import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-menu-footer',
    templateUrl: './menu-footer.component.html',
    styleUrls: ['./menu-footer.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
export class MenuFooterComponent implements OnInit {
    @Input() footerMenus: any;
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
