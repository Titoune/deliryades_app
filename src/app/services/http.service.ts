import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CachedHttp} from 'angular-async-cache';
import {ToolsService} from './tools.service';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        public httpClient: HttpClient, private cachedHttp: CachedHttp, private toolsService: ToolsService,  private fileTransfer: FileTransfer, private webview: WebView) {
    }

    get(endpoint, asyncCacheOptions = {bypassCache: false, fromCacheAndReplay: true}) {
        return this.cachedHttp.get(environment.api_url + endpoint, {
            params: {
                api: environment.api_version
            }
        }, asyncCacheOptions);

        // return this.httpClient.get(environment.api_url + endpoint, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     params: {
        //         api: environment.api_version
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
                api: environment.api_version
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
                api: environment.api_version
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
                api: environment.api_version
            }
        }).toPromise().catch(err => {
            return (err instanceof ProgressEvent ? {code: 0} : err.error);
        });
    }

    public file(endpoint, data) {
        // data = this.webview.convertFileSrc(data);
        data = data.replace('http://localhost:8080/_app_file_', 'file://');
       // if (data.charAt(0) === '/') {
       //     data = 'file://' + data;
       // }
        console.log(data);

        return this.toolsService.readFileInformations(data).then(result => {
            console.log('inside readfile info');
            const fileTransfer: FileTransferObject = this.fileTransfer.create();

            return fileTransfer.upload(data, environment.api_url + endpoint, {
                httpMethod: 'post',
                fileKey: 'file',
                fileName: 'file.' + (data.split('.').pop()),
                chunkedMode: false,
                mimeType: result['type'],
                headers: {'Authorization': this.toolsService.jwt},
                params: {api: environment.api_version}
            }, true).catch(err => {
                console.log(err);
                return (err instanceof ProgressEvent ? {code: 0} : err.error);
            });
        }).catch(err => {
            console.log(err);
            return err.error;
        });
    }

}
