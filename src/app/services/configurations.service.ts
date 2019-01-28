import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class ConfigurationsService {

    constructor(public httpService: HttpService) {
    }


    public_setBugReportCreateForm(data) {
        return this.httpService.post('public/configurations/set-bug-report-create-form', data);
    }

    public_getWebsiteTermsOfUse() {
        return this.httpService.get('public/configurations/get-website-terms-of-use');
    }

    public_getOpenRegistration() {
        return this.httpService.get('public/configurations/get-open-registration');
    }


}
