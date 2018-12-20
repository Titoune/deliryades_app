import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    constructor(public httpService: HttpService) {
    }


    user_setCreateForm(data) {
        return this.httpService.post('user/events/set-create-form', data);
    }

    user_setUpdateForm(event_id, data) {
        return this.httpService.patch('user/events/set-update-form/' + event_id, data);
    }

    user_deleteEvent(event_id) {
        return this.httpService.delete('user/events/delete-event/' + event_id);
    }

    user_getMonthEvents(month, year) {
        return this.httpService.get('user/events/get-month-events/' + month + '/' + year);
    }

    administrator_getEvents(user_id, skip, asyncCacheOptions = null) {
        return this.httpService.get('admin/events/get-events/' + user_id + '/' + skip, asyncCacheOptions);
    }

}
