import {Injectable} from '@angular/core';
import {HttpService} from './http.service';

@Injectable({
    providedIn: 'root'
})
export class DevicesService {

    constructor(public httpService: HttpService) {
    }

    user_setUpdateForm(uuid, data) {
        return this.httpService.patch('user/devices/set-update-form/' + uuid, data);
    }

    user_deleteDevice(uuid) {
        return this.httpService.delete('user/devices/delete-device/' + uuid);
    }
}
