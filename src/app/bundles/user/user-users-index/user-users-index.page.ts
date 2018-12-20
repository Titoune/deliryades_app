import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController, AlertController, IonInfiniteScroll, IonRefresher, IonSearchbar, LoadingController, ModalController, NavController} from '@ionic/angular';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {ToolsService} from '../../../services/tools.service';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../../services/users.service';
import {UserUserViewComponent} from '../../../components/user-user-view/user-user-view.component';

@Component({
  selector: 'app-user-users-index',
  templateUrl: './user-users-index.page.html',
  styleUrls: ['./user-users-index.page.scss'],
})
export class UserUsersIndexPage implements OnInit {


  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonRefresher) refresher: IonRefresher;
  @ViewChild('searchbar') searchbar: IonSearchbar;
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
    this.usersService.user_getUsers(0).subscribe(request => {
      this.users = request.data.users;
    });
  }

  getUsers() {
    this.usersService.user_getUsers(this.users.length, {
      bypassCache: true,
      fromCacheAndReplay: false
    }).subscribe(request => {
      this.users = this.users.concat(request.data.users);
      this.infiniteScroll.complete();
      this.refresher.complete();
    });
  }

  async getUserByName(event) {
    const request = await <any>this.usersService.user_getUserByName({terms: event.target.value});

    if (request.code === 200) {
      this.users = request.data.users;
    }
  }

  async showUserViewModal(user_id) {
    const modal = await this.modalCtrl.create({
      component: UserUserViewComponent,
      componentProps: {user_id: user_id},
      backdropDismiss: false
    });
    return await modal.present();
  }

  doRefresh() {
    this.users = [];
    this.getUsers();
  }

}
