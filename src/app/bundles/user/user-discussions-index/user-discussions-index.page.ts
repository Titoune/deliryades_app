import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll, IonRefresher, ModalController, NavController} from '@ionic/angular';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {ToolsService} from '../../../services/tools.service';
import {DiscussionCommentsService} from '../../../services/discussion-comments.service';
import {UserDiscussionCreateFormComponent} from '../../../components/forms/user-discussion-create-form/user-discussion-create-form.component';

@Component({
  selector: 'app-user-discussions-index',
  templateUrl: './user-discussions-index.page.html',
  styleUrls: ['./user-discussions-index.page.scss'],
})
export class UserDiscussionsIndexPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonRefresher) refresher: IonRefresher;
  public discussion_comments: any = [];
  environment = environment;
  moment = moment;

  constructor(
      public discussionCommentsService: DiscussionCommentsService,
      public navCtrl: NavController,
      public toolsService: ToolsService,
      public modalCtrl: ModalController
  ) {
  }


  ngOnInit() {
    this.getDiscussionCommentsFromCache();
  }

  getDiscussionCommentsFromCache() {
    this.discussionCommentsService.user_getDiscussionComments(0).subscribe(request => {
      this.discussion_comments = request.data.discussion_comments;
    });
  }

  getDiscussionComments() {
    this.discussionCommentsService.user_getDiscussionComments(this.discussion_comments.length, {
      bypassCache: true,
      fromCacheAndReplay: false
    }).subscribe(request => {
      this.discussion_comments = this.discussion_comments.concat(request.data.discussion_comments);
      this.infiniteScroll.complete();
      this.refresher.complete();
    });
  }

  async showDiscussionCommentCreateFormModal() {
    const modal = await this.modalCtrl.create({
      component: UserDiscussionCreateFormComponent,
      backdropDismiss: false
    });
    return await modal.present();
  }

  doRefresh() {
    this.discussion_comments = [];
    this.getDiscussionComments();
  }

}
