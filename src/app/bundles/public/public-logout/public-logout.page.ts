import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../../../services/tools.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-public-logout',
    templateUrl: './public-logout.page.html',
    styleUrls: ['./public-logout.page.scss'],
})
export class PublicLogoutPage implements OnInit {
    environment = environment;

    constructor(
        public toolsService: ToolsService
    ) {
    }

    ngOnInit() {
        this.logout();
    }

    public logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('socket_jwt');
        this.toolsService.payloads = {};
        this.toolsService.jwt = null;
        this.toolsService.socket_jwt = null;

    }


}
