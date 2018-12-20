import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EventCommentsService {

  constructor(public httpService: HttpService) {
  }
  user_getEventComments(skip, asyncCacheOptions = null) {
    return this.httpService.get('user/event-comments/get-event-comments/' + skip, asyncCacheOptions);
  }
}
