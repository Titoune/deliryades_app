import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../../../services/tools.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-administrator-menu',
    templateUrl: './administrator-menu.component.html',
    styleUrls: ['./administrator-menu.component.scss']
})
export class AdministratorMenuComponent implements OnInit {
    public menus = [
        {
            title: 'Dashboard',
            url: '/admin/dashboard',
            icon: 'assets/icon/menu/news.svg',
            class: 'news',
            notification_count: 0
        },
        {
            title: 'Utilisateurs',
            url: '/admin/utilisateurs',
            icon: 'assets/icon/menu/news.svg',
            class: 'news',
            notification_count: 0
        }
    ];
    public footerMenus = [
        {
            title: 'Autres comptes',
            url: '/comptes',
            icon: 'assets/icon/menu/switch.svg',
            notification_count: 0
        }
    ];
    environment = environment;

    constructor(
        public toolsService: ToolsService,
    ) {
    }

    ngOnInit() {
    }

}
