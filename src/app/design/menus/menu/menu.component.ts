import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

/**
 * Menu component
 */
@Component({
    selector: 'mec-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
export class MenuComponent implements OnInit {
    /**
     * Require menu array
     */
    @Input() menus = [];

    environment = environment;

    /**
     *  array of menus
     */
    public intialMenus = [];
    /**
     * Set back btn display
     */
    public returnBtn = false;

    constructor() {
    }

    /**
     * Set initial menu
     */
    ngOnInit() {
        this.intialMenus = this.menus;
    }

    /**
     * Display submenu
     * @param sub submenu array
     */
    submenu(sub) {
        this.menus = sub;
        this.returnBtn = true;
    }

    /**
     * Go to initial menu
     */
    goback() {
        this.menus = this.intialMenus;
        this.returnBtn = false;
    }


}
