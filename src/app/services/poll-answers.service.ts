import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class PollAnswersService {

    constructor(public httpService: HttpService) {
    }

    public user_setCreateForm(data) {
        return this.httpService.post('user/poll-answers/set-create-form', data);
    }
}
