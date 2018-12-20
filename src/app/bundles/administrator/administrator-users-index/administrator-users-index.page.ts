import {Component, OnInit, ViewChild} from '@angular/core';
import {
    ActionSheetController,
    AlertController,
    IonInfiniteScroll,
    IonRefresher,
    LoadingController,
    ModalController,
    NavController
} from '@ionic/angular';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {UsersService} from '../../../services/users.service';
import {ToolsService} from '../../../services/tools.service';

@Component({
    selector: 'app-administrator-users-index',
    templateUrl: './administrator-users-index.page.html',
    styleUrls: ['./administrator-users-index.page.scss'],
})
export class AdministratorUsersIndexPage implements OnInit {


    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    @ViewChild(IonRefresher) refresher: IonRefresher;
    public users: any = [];
    environment = environment;
    moment = moment;

    constructor(
        public usersService: UsersService,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public loadingCtrl: LoadingController,
        public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
        this.getUsersFromCache();
    }

    getUsersFromCache() {
        this.usersService.administrator_getUsers(0).subscribe(request => {
            this.users = request.data.users;
        });
    }

    getUsers() {
        this.usersService.administrator_getUsers(this.users.length, {
            bypassCache: true,
            fromCacheAndReplay: false
        }).subscribe(request => {
            this.users = this.users.concat(request.data.users);
            this.infiniteScroll.complete();
            this.refresher.complete();
        });
    }

    doRefresh() {
        this.users = [];
        this.getUsers();
    }


}
