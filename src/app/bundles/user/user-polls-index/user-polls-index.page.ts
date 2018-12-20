import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController, AlertController, IonInfiniteScroll, IonRefresher, LoadingController, ModalController, NavController} from '@ionic/angular';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {PollsService} from '../../../services/polls.service';
import {PollAnswersService} from '../../../services/poll-answers.service';
import {ToolsService} from '../../../services/tools.service';
import {UserPollCreateFormComponent} from '../../../components/forms/user-poll-create-form/user-poll-create-form.component';
import {UserPollUpdateFormComponent} from '../../../components/forms/user-poll-update-form/user-poll-update-form.component';

@Component({
  selector: 'app-user-polls-index',
  templateUrl: './user-polls-index.page.html',
  styleUrls: ['./user-polls-index.page.scss'],
})
export class UserPollsIndexPage implements OnInit {


  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonRefresher) refresher: IonRefresher;
  public segment = 'progress';
  public polls: any;
  environment = environment;
  moment = moment;

  constructor(
      private pollsService: PollsService,
      private pollAnswersService: PollAnswersService,
      private toolsService: ToolsService,
      public actionSheetCtrl: ActionSheetController,
      public loadingCtrl: LoadingController,
      public navCtrl: NavController,
      public modalCtrl: ModalController,
      public alertCtrl: AlertController
  ) {
  }


  ngOnInit() {
    this.getPollsFromCache();
  }

  getPollsFromCache() {
    this.pollsService.user_getPolls(this.segment, 0).subscribe(request => {
      this.polls = request.data.polls;
    });
  }

  getPolls() {
    this.pollsService.user_getPolls(this.segment, this.polls.length, {
      bypassCache: true,
      fromCacheAndReplay: false
    }).subscribe(request => {
      this.polls = this.polls.concat(request.data.polls);
      this.infiniteScroll.complete();
      this.refresher.complete();
    });
  }

  segmentChanged(event) {
    this.polls = [];
    this.segment = event.target.value;
    this.getPollsFromCache();
  }


  async loadPollActionSheet(poll) {
    const options = [];


    options.push({
      text: 'Modifier',
      role: 'destructive',

      handler: async () => {
        await this.showPollUpdateFormModal(poll);
      }
    });

    options.push({
      text: 'Supprimer',
      role: 'destructive',

      handler: async () => {
        await this.deletePoll(poll);
      }
    });

    options.push({
      text: 'Annuler',
      role: 'cancel',

      handler: () => {
      }
    });


    const actionSheet = await this.actionSheetCtrl.create({
      // overlayIndex: 10,
      header: 'Actions',
      buttons: options
    });
    await actionSheet.present();
  }


  async deletePoll(poll) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Voulez-vous vraiment faire cette action ?',
      buttons: [{
        text: 'Annuler',

        role: 'cancel',
        handler: () => {
        }
      }, {
        text: 'Supprimer',
        role: 'destructive',

        handler: async () => {
          const loading = await this.loadingCtrl.create({message: 'suppression...'});
          await loading.present();

          const request = await <any>this.pollsService.user_deletePoll(poll.id);

          await loading.dismiss();

          if (request.code === 200) {

          }
        }
      }]
    });
    await alert.present();
  }


  async showPollCreateFormModal() {
    const modal = await this.modalCtrl.create({
      component: UserPollCreateFormComponent,
      backdropDismiss: false
    });
    return await modal.present();
  }

  async showPollUpdateFormModal(poll) {
    const modal = await this.modalCtrl.create({
      component: UserPollUpdateFormComponent,
      componentProps: {poll: poll},
      backdropDismiss: false
    });
    return await modal.present();
  }


  doRefresh() {
    this.polls = [];
    this.getPolls();
  }


}
