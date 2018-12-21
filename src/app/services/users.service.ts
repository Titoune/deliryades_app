import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(public httpService: HttpService) {
    }

    user_getUsers(skip, asyncCacheOptions = null) {
        return this.httpService.get('user/users/get-users/' + skip, asyncCacheOptions);
    }

    user_getUserByName(data) {
        return this.httpService.post('user/users/get-user-by-name/', data);
    }

    administrator_getUsers(skip, asyncCacheOptions = null) {
        return this.httpService.get('admin/users/get-users/' + skip, asyncCacheOptions);
    }

    administrator_getUser(id) {
        return this.httpService.get('admin/users/get-user/' + id);
    }

    administrator_setCreateForm(data) {
        return this.httpService.post('admin/users/set-create-form', data);
    }


    administrator_setUpdateForm(user_id, data) {
        return this.httpService.patch('admin/users/set-update-form/' + user_id, data);
    }


    administrator_deleteUser(user_id) {
        return this.httpService.delete('admin/users/delete-user/' + user_id);
    }


////////////


    shared_setUpdateForm(user_id, data) {
        return this.httpService.patch('shared/users/set-update-form/' + user_id, data);
    }

    shared_getMe(user_id) {
        return this.httpService.get('shared/users/get-me/' + user_id);
    }

    shared_setUserField(data) {
        return this.httpService.patch('shared/users/set-user-field', data);
    }


    user_getMayorByCityId(city_id) {
        return this.httpService.get('user/users/get-mayor-by-city-id/' + city_id);
    }

    user_searchUserByEmail(data) {
        return this.httpService.post('user/users/search-user-by-email/', data);
    }


}