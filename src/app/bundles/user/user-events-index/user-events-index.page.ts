import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {environment} from '../../../../environments/environment';
import {EventsService} from '../../../services/events.service';
import {ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {CalendarEvent} from 'angular-calendar';
import {UserEventsDayViewComponent} from '../../../components/user-events-day-view/user-events-day-view.component';
import {UserEventCreateFormComponent} from '../../../components/forms/user-event-create-form/user-event-create-form.component';

@Component({
    selector: 'app-user-events-index',
    templateUrl: './user-events-index.page.html',
    styleUrls: ['./user-events-index.page.scss'],
})
export class UserEventsIndexPage implements OnInit {

    moment = moment;
    date: Date = new Date();
    month_events: any = [];
    environment = environment;

    constructor(public eventsService: EventsService,
                private modalCtrl: ModalController,
                public toolsService: ToolsService) {
    }

    ngOnInit() {
        this.getMonthEvents();
    }


    getMonthEvents() {
        this.eventsService.user_getMonthEvents(moment(this.date).month(), moment(this.date).year()).subscribe(request => {

            this.month_events = request.data.month_events.map(function (event: any) {
                return {
                    start: new Date(event.start),
                    end: new Date(event.end),
                    event: event
                };
            });
        });
    }


    async showEventsDayViewModal({date, events}: { date: Date; events: CalendarEvent[] }) {
        const mapped_events = events.map(function (event: any) {
            return event.event;
        });

        const modal = await this.modalCtrl.create({
            component: UserEventsDayViewComponent,
            componentProps: {date: date, events: mapped_events},
            backdropDismiss: false
        });
        return await modal.present();
    }

    async showEventCreateFormModal() {
        const modal = await this.modalCtrl.create({
            component: UserEventCreateFormComponent,
            backdropDismiss: false
        });
        return await modal.present();
    }

}
