import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CachedHttp} from 'angular-async-cache';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        public httpClient: HttpClient, private cachedHttp: CachedHttp) {
    }

    get(endpoint, asyncCacheOptions = {bypassCache: false, fromCacheAndReplay: true}) {
        return this.cachedHttp.get(environment.api_url + endpoint, {
            params: {
                api: environment.app_version
            }
        }, asyncCacheOptions);

        // return this.httpClient.get(environment.api_url + endpoint, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     params: {
        //         api: environment.app_version
        //     }
        // }).toPromise().catch(err => {
        //
        //     return (err instanceof ProgressEvent ? {code: 0} : err.error);
        // });
    }


    delete(endpoint) {

        return this.httpClient.delete(environment.api_url + endpoint, {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                api: environment.app_version
            }
        }).toPromise().catch(err => {
            return (err instanceof ProgressEvent ? {code: 0} : err.error);
        });
    }

    post(endpoint, data) {
        return this.httpClient.post(environment.api_url + endpoint, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                api: environment.app_version
            }
        }).toPromise().catch(err => {
            return (err instanceof ProgressEvent ? {code: 0} : err.error);
        });


    }

    patch(endpoint, data) {

        return this.httpClient.patch(environment.api_url + endpoint, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                api: environment.app_version
            }
        }).toPromise().catch(err => {
            return (err instanceof ProgressEvent ? {code: 0} : err.error);
        });
    }

}
