import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../../../services/tools.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
    public menus = [
        {
            title: 'Annuaire',
            url: '/annuaire',
            icon: 'assets/icon/menu/administres.svg',
            class: 'administres',
            notification_count: this.toolsService.notification_counts[7]
        },
       // {
       //     title: 'Messagerie',
       //     url: '/messages',
        //    icon: 'assets/icon/menu/messages.svg',
        //    class: 'messages',
         //   notification_count: this.toolsService.notification_counts[1]
        // },
       // {
           // title: 'Sondages',
           // url: '/sondages',
           // icon: 'assets/icon/menu/polls.svg',
           // class: 'polls',
           // notification_count: 0
       // },
       // {
        //    title: 'Agenda',
         //   url: '/evenements',
         //   icon: 'assets/icon/menu/calendar.svg',
         //   class: 'calendar',
         //   notification_count: 0
        //},
        //{
        //    title: 'Chat',
        //    url: '/chat',
        //    icon: 'assets/icon/menu/calendar.svg',
        //    class: 'calendar',
        //    notification_count: 0
        //}
    ];
    public footerMenus = [
        {
            title: 'Paramètres',
            url: '/parametres',
            icon: 'settings',
            notification_count: 0
        },
        {
            title: null,
            url: null,
            icon: null,
            notification_count: 0
        },
        {
            title: 'Déconnexion',
            url: '/deconnexion',
            icon: 'power',
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
