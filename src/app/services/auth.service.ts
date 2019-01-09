import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(public httpService: HttpService) {
    }

    public_setUserLoginForm(data) {
        return this.httpService.post('public/auth/set-user-login-form', data);
    }


    public_setUserPasswordLostForm(data) {
        return this.httpService.post('public/auth/set-user-password-lost-form', data);
    }

}
