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

    user_getUser(user_id) {
        return this.httpService.get('user/users/get-user/' + user_id);
    }


    administrator_getUsers(skip, asyncCacheOptions = null) {
        return this.httpService.get('admin/users/get-users/' + skip, asyncCacheOptions);
    }

    administrator_getUser(id) {
        return this.httpService.get('admin/users/get-user/' + id);
    }

    administrator_setCreateForm(data) {
        return this.httpService.post('user/users/admin-set-create-form', data);
    }


    administrator_setUpdateForm(user_id, data) {
        return this.httpService.patch('user/users/admin-set-update-form/' + user_id, data);
    }

    administrator_uploadUserPicture(user_id, file) {
        return this.httpService.file('user/users/admin-upload-user-picture/' + user_id, file);
    }


    administrator_deleteUser(user_id) {
        return this.httpService.delete('admin/users/delete-user/' + user_id);
    }


////////////


    user_setUpdateForm(user_id, data) {
        return this.httpService.patch('user/users/set-update-form/' + user_id, data);
    }

    user_uploadUserPicture(file) {
        return this.httpService.file('user/users/upload-user-picture/', file);
    }

    user_setPasswordUpdateForm(user_id, data) {
        return this.httpService.patch('user/users/set-password-update-form/' + user_id, data);
    }

    user_getMe(user_id) {
        return this.httpService.get('user/users/get-me/' + user_id);
    }

    user_setUserField(data) {
        return this.httpService.patch('user/users/set-user-field', data);
    }


    user_getMayorByCityId(city_id) {
        return this.httpService.get('user/users/get-mayor-by-city-id/' + city_id);
    }

    user_searchUserByEmail(data) {
        return this.httpService.post('user/users/search-user-by-email/', data);
    }


}
