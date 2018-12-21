import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class DiscussionCommentsService {


    constructor(public httpService: HttpService) {
    }

    user_getDiscussionComments(skip, asyncCacheOptions = null) {
        return this.httpService.get('user/discussion-comments/get-discussion-comments/' + skip, asyncCacheOptions);
    }

    user_getDiscussionCommentsByUser(user_id, skip, asyncCacheOptions = null) {
        return this.httpService.get('user/discussion-comments/get-discussion-comments-by-user/' + user_id + '/' + skip, asyncCacheOptions);
    }

    user_setCreateForm(data) {
        return this.httpService.post('user/discussion-comments/set-create-form', data);
    }


    user_deleteDiscussionComment(discussion_comment_id) {
        return this.httpService.delete('user/discussion-comments/delete-discussion-comment/' + discussion_comment_id);
    }


}
