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

    public_checkPasswordRegenerateLink(data) {
        return this.httpService.post('public/auth/get-user-for-password-regenerate', data);
    }

    public_setUserPasswordRegenerateForm(data) {
        return this.httpService.post('public/auth/set-user-password-regenerate-form', data);
    }

    public_setUserRegistrationForm(data) {
        return this.httpService.post('public/auth/set-user-registration-form', data);
    }

    public_emailValidation(data) {
        return this.httpService.post('public/auth/check-user-registration', data);
    }


    // shared
    shared_getCitizenAccounts(user_id) {
        return this.httpService.get('shared/auth/get-citizen-accounts/' + user_id);
    }

    shared_getMayorAccounts(user_id) {
        return this.httpService.get('shared/auth/get-mayor-accounts/' + user_id);

    }

    shared_getMandataryAccounts(user_id) {
        return this.httpService.get('shared/auth/get-mandatary-accounts/' + user_id);

    }

    shared_getAdministratorAccounts(user_id) {
        return this.httpService.get('shared/auth/get-administrator-accounts/' + user_id);

    }

    shared_citizenLogin(data) {
        return this.httpService.post('shared/auth/citizen-login', data);

    }

    shared_mayorLogin(data) {
        return this.httpService.post('shared/auth/mayor-login', data);

    }

    shared_mandataryLogin(data) {
        return this.httpService.post('shared/auth/mandatary-login', data);

    }

    shared_administratorLogin(data) {
        return this.httpService.post('shared/auth/administrator-login', data);

    }


}
