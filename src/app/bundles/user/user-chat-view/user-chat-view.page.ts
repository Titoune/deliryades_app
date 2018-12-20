import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController, AlertController, IonInfiniteScroll, LoadingController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {ToolsService} from '../../../services/tools.service';
import {lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {ChatCommentsService} from '../../../services/chat-comments.service';

@Component({
  selector: 'app-user-chat-view',
  templateUrl: './user-chat-view.page.html',
  styleUrls: ['./user-chat-view.page.scss'],
})
export class UserChatViewPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public chat_comments: any = [];
  create_form: FormGroup;
  environment = environment;
  moment = moment;

  constructor(
      public chatCommentsService: ChatCommentsService,
      public navCtrl: NavController,
      public toolsService: ToolsService,
      public formBuilder: FormBuilder,
      public loadingCtrl: LoadingController,
      public actionSheetCtrl: ActionSheetController,
      public alertCtrl: AlertController
  ) {
  }


  ngOnInit() {
    this.getChatCommentsFromCache();
    this.buildForm();
  }


  buildForm() {
    this.create_form = this.formBuilder.group({
      content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
    }, {updateOn: 'submit'});
  }

  getChatCommentsFromCache() {
    this.chatCommentsService.user_getChatComments(0).subscribe(request => {
      this.chat_comments = request.data.chat_comments.reverse();
    });
  }

  getChatComments() {
    this.chatCommentsService.user_getChatComments(this.chat_comments.length, {
      bypassCache: true,
      fromCacheAndReplay: false
    }).subscribe(request => {
      this.chat_comments = request.data.chat_comments.reverse().concat(this.chat_comments);
      this.infiniteScroll.complete();
    });
  }


  async submit() {
    if (this.create_form.valid) {
      const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
      await loading.present();

      const request = await <any>this.chatCommentsService.user_setCreateForm(this.create_form.value);

      await loading.dismiss();

      if (request.code === 200) {
        this.create_form.reset();
        this.create_form.get('content').setErrors({'error': null});
      } else {
        ToolsService.generateServerValidationErrors(this.create_form, request);
      }
    }
  }

  async loadChatCommentActionSheet(chat_comment) {
    const options = [];

    options.push({
      text: 'Supprimer le message',
      role: 'destructive',

      handler: async () => {
        await this.deleteChatComment(chat_comment);
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


  async deleteChatComment(chat_comment) {
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

          const request = await <any>this.chatCommentsService.user_deleteChatComment(chat_comment.id);

          await loading.dismiss();

          if (request.code === 200) {
          }
        }
      }]
    });
    await alert.present();
  }


}
