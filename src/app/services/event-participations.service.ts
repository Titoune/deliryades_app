import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EventParticipationsService {

  constructor(public httpService: HttpService) {
  }
  user_getEventParticipations(skip, asyncCacheOptions = null) {
    return this.httpService.get('user/event-participations/get-event-participations/' + skip, asyncCacheOptions);
  }
}
