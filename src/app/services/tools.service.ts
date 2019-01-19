import {Injectable, NgZone} from '@angular/core';
import {environment} from '../../environments/environment';
import {Events} from '@ionic/angular';
import {File, FileEntry} from '@ionic-native/file/ngx';

@Injectable({
    providedIn: 'root'
})
export class ToolsService {
    public jwt: string = null;
    public socket_jwt: string = null;
    public payloads: any = {};
    public platform = 'web';
    public api_version: string = environment.api_version;
    public device_push_token: string = null;
    public uuid: string = null;
    public manufacturer: string = null;
    public model: string = null;
    public version: string = null;

    public screen_width: number = window.innerWidth;
    public screen_height: number = window.innerHeight;
    public screen_size = 'xs';
    public allow_split_pane = true;
    public menu_type: string = null;
    public notification_counts = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 55,
        10: 0,
        11: 0,
        12: 0,
        13: 0,
        14: 0,
        15: 0,
        16: 0,
        17: 0,
        18: 0,
        19: 0,
        20: 0,
        21: 0,
        22: 0,
        23: 0,
        24: 0
    };

    public authorization_notification = false;
    public authorization_location = false;
    public authorization_external_storage = false;
    public authorization_camera = false;
    public authorization_microphone = false;

    constructor(private ngZone: NgZone, public events: Events, private file: File) {
        this.getScreenSize();
        window.onresize = (e) => {
            this.ngZone.run(() => {
                this.getScreenSize();
            });
        };
    }

    public getScreenSize() {
        this.screen_width = window.innerWidth;
        this.screen_height = window.innerHeight;

        let changed_size = this.screen_size;
        if (this.screen_width < 540) {
            changed_size = 'xs';
        } else if (this.screen_width >= 540 && this.screen_width < 720) {
            changed_size = 'sm';
        } else if (this.screen_width >= 720 && this.screen_width < 960) {
            changed_size = 'md';
        } else if (this.screen_width >= 960 && this.screen_width < 1140) {
            changed_size = 'lg';
        } else if (this.screen_width >= 1140) {
            changed_size = 'xl';
        }

        if (this.screen_size !== changed_size) {
            this.screen_size = changed_size;
            this.events.publish('screen_resize');
        }
    }


    public static generateServerValidationErrors(form, response) {
        if (response.data && response.data._form && response.data._form.errors) {

            Object.keys(form.controls).forEach(controlName => {
                if (response.data._form.errors[controlName]) {
                    form.controls[controlName].setErrors({error: response.data._form.errors[controlName]});
                }
            });
        }
    }

    public readFileInformations(path) {
        return new Promise((resolve, reject) => {
            this.file.resolveLocalFilesystemUrl(path).then((entry: FileEntry) => {
                const fileEntry = entry as FileEntry;
                fileEntry.file(data => {
                    resolve(data);
                }, error => {
                    reject(error);

                });
            }).catch(data => {
                reject({
                    error: {
                        code: data.code,
                        flash: data.message,
                        status: 'error',
                    }
                });
            })
        });
    }


    public static extractUrlParams(url) {

        const extract = url.replace(/&amp;/g, '&').split('#')[0];
        const urlParams = {};
        let queryString = extract.split('?')[1];
        if (!queryString) {
            if (extract.search('=') !== false) {
                queryString = extract;
            }
        }
        if (queryString) {
            const keyValuePairs = queryString.split('&');
            for (let i = 0; i < keyValuePairs.length; i++) {
                const keyValuePair = keyValuePairs[i].split('=');
                const paramName = keyValuePair[0];
                const paramValue = keyValuePair[1] || '';
                urlParams[paramName] = decodeURIComponent(paramValue.replace(/\+/g, ' '));
            }
        }
        return urlParams;
    }


    public isEmpty(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }


    public generateFirebaseRedirectLink(url) {
        return environment.firebase_page_link_url + '?link=' + encodeURI(url) + '&apn=' + environment.android_package_name + '&ibi=' + environment.ios_package_name + '&afl=' + encodeURI(url) + '&ifl=' + encodeURI(url);
    }
}
