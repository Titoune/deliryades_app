import {Component, OnInit, ViewChild} from '@angular/core';
import {ActionSheetController, AlertController, IonInfiniteScroll, LoadingController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {ToolsService} from '../../../services/tools.service';
import {ActivatedRoute} from '@angular/router';
import {lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {DiscussionCommentsService} from '../../../services/discussion-comments.service';

@Component({
    selector: 'app-user-discussion-view',
    templateUrl: './user-discussion-view.page.html',
    styleUrls: ['./user-discussion-view.page.scss'],
})
export class UserDiscussionViewPage implements OnInit {

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
    public discussion_comments: any = [];
    create_form: FormGroup;
    environment = environment;
    moment = moment;

    constructor(
        public discussionCommentsService: DiscussionCommentsService,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        private route: ActivatedRoute,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController
    ) {
    }


    ngOnInit() {
        this.getDiscussionCommentsFromCache();
        this.buildForm();
    }


    buildForm() {
        this.create_form = this.formBuilder.group({
            content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
            user_id: [this.route.snapshot.paramMap.get('user_id'), [requiredValidator]],
        }, {updateOn: 'submit'});
    }

    getDiscussionCommentsFromCache() {
        this.discussionCommentsService.user_getDiscussionCommentsByUser(this.route.snapshot.paramMap.get('user_id'), 0).subscribe(request => {
            this.discussion_comments = request.data.discussion_comments.reverse();
        });
    }

    getDiscussionComments() {
        this.discussionCommentsService.user_getDiscussionCommentsByUser(this.route.snapshot.paramMap.get('user_id'), this.discussion_comments.length, {
            bypassCache: true,
            fromCacheAndReplay: false
        }).subscribe(request => {
            this.discussion_comments = request.data.discussion_comments.reverse().concat(this.discussion_comments);
            this.infiniteScroll.complete();
        });
    }

    async submit() {
        if (this.create_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.discussionCommentsService.user_setCreateForm(this.create_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                this.create_form.reset();
                this.create_form.patchValue({user_id: this.route.snapshot.paramMap.get('user_id')});
                this.create_form.get('content').setErrors({'error': null});
            } else {
                ToolsService.generateServerValidationErrors(this.create_form, request);
            }
        }
    }

    async loadDiscussionCommentActionSheet(discussion_comment) {
        const options = [];

        options.push({
            text: 'Supprimer le message',
            role: 'destructive',

            handler: async () => {
                await this.deleteDiscussionComment(discussion_comment);
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


    async deleteDiscussionComment(discussion_comment) {
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

                    const request = await <any>this.discussionCommentsService.user_deleteDiscussionComment(discussion_comment);

                    await loading.dismiss();

                    if (request.code === 200) {

                    }
                }
            }]
        });
        await alert.present();
    }

}
