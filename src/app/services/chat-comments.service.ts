import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class ChatCommentsService {

    constructor(public httpService: HttpService) {
    }

    user_getChatComments(skip, asyncCacheOptions = null) {
        return this.httpService.get('user/chat-comments/get-chat-comments/' + skip, asyncCacheOptions);
    }

    user_setCreateForm(data) {
        return this.httpService.post('user/chat-comments/set-create-form', data);
    }


    user_deleteChatComment(chat_comment_id) {
        return this.httpService.delete('user/chat-comments/delete-chat-comment/' + chat_comment_id);
    }


}
