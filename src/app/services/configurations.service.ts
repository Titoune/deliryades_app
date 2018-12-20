import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  constructor(public httpService: HttpService) {
  }


  shared_setBugReportCreateForm(data) {
    return this.httpService.post('shared/configurations/set-bug-report-create-form', data);
  }
}
