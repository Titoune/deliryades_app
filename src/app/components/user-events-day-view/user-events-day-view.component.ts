import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {EventsService} from '../../services/events.service';
import {ToolsService} from '../../services/tools.service';
import {ActionSheetController, AlertController, LoadingController, ModalController} from '@ionic/angular';
import {UserEventCreateFormComponent} from '../forms/user-event-create-form/user-event-create-form.component';
import {UserEventUpdateFormComponent} from '../forms/user-event-update-form/user-event-update-form.component';

@Component({
    selector: 'app-user-events-day-view',
    templateUrl: './user-events-day-view.component.html',
    styleUrls: ['./user-events-day-view.component.scss']
})
export class UserEventsDayViewComponent implements OnInit {


    @Input() date;
    @Input() events = [];
    environment = environment;

    constructor(
        public eventsService: EventsService,
        public toolsService: ToolsService,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public actionSheetCtrl: ActionSheetController
    ) {
    }

    ngOnInit() {

    }


    async loadEventActionSheet(event) {
        const options = [];


        options.push({
            text: 'Modifier',
            role: 'destructive',

            handler: async () => {
                await this.showEventUpdateFormModal(event);
            }
        });

        options.push({
            text: 'Supprimer',
            role: 'destructive',

            handler: async () => {
                await this.deleteEvent(event);
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


    async deleteEvent(event) {
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

                    const request = await <any>this.eventsService.user_deleteEvent(event.id);

                    await loading.dismiss();

                    if (request.code === 200) {

                    }
                }
            }]
        });
        await alert.present();
    }


    async showEventCreateFormModal() {
        const modal = await this.modalCtrl.create({
            component: UserEventCreateFormComponent,
            componentProps: {start: this.date},
            backdropDismiss: false
        });
        return await modal.present();
    }

    async showEventUpdateFormModal(event) {
        const modal = await this.modalCtrl.create({
            component: UserEventUpdateFormComponent,
            componentProps: {event: event},
            backdropDismiss: false
        });
        return await modal.present();
    }


}
