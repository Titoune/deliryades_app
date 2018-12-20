import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class PollsService {

    constructor(public httpService: HttpService) {
    }

    user_getPolls(segment, skip, asyncCacheOptions = null) {
        return this.httpService.get('user/polls/get-polls/' + segment + '/' + skip, asyncCacheOptions);
    }

    user_deletePoll(poll_id) {
        return this.httpService.delete('user/polls/delete-poll/' + poll_id);
    }


    user_setCreateForm(data) {
        return this.httpService.post('user/polls/set-create-form', data);
    }

    user_setUpdateForm(poll_id, data) {
        return this.httpService.patch('user/polls/set-update-form/' + poll_id, data);
    }

}
