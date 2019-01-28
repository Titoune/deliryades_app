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

    public_setRegistrationForm(data) {
        return this.httpService.post('public/auth/set-registration-form', data);
    }


    public_setUserPasswordLostForm(data) {
        return this.httpService.post('public/auth/set-user-password-lost-form', data);
    }

    public_emailValidation(data) {
        return this.httpService.post('public/auth/check-user-registration', data);
    }

    user_setCodeForm(data) {
        return this.httpService.post('user/auth/set-code-form', data);
    }

    user_setFamilyCreateForm(data) {
        return this.httpService.post('user/auth/set-family-create-form', data);
    }

    user_sendRegistrationCode(data) {
        return this.httpService.post('user/auth/send-registration-code', data);
    }



}
