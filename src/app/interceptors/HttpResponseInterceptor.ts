import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';

import {concatMap, delay, retryWhen, tap} from 'rxjs/operators';
import {ToolsService} from '../services/tools.service';
import {AlertController, NavController, ToastController} from '@ionic/angular';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
    private seconds = 2000;

    constructor(public toolsService: ToolsService,
                public toastCtrl: ToastController,
                private alertCtrl: AlertController,
                // private market: Market,
                private navCtrl: NavController) {

    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf(environment.api_url) > -1) {
            const headers = {'Content-Type': 'application/json'};
            if (this.toolsService.jwt) {
                headers['Authorization'] = this.toolsService.jwt;
            }
            request = request.clone({
                setHeaders: headers
            });
        }


        return next.handle(request)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        this.handleResponse(event);
                    }
                }),
                retryWhen(errors => errors
                    .pipe(
                        concatMap((error, count) => {
                            if (count < 6 && error.status === 0) {
                                this.seconds = this.seconds * 2;
                                return of(error.status);
                            }
                            this.handleResponse(error);
                            return throwError(error);
                        }),
                        delay(this.seconds)
                    )
                )
            );

    }


    private async handleResponse(res) {

        const response = (res instanceof HttpErrorResponse ? res.error : res.body);
        if (response.new_jwt) {
            this.toolsService.jwt = response.new_jwt;
            this.toolsService.payloads = (new JwtHelperService()).decodeToken(this.toolsService.jwt);
            localStorage.setItem('jwt', response.new_jwt);
        }

        if (response.new_socket_jwt) {
            this.toolsService.socket_jwt = response.new_socket_jwt;
            localStorage.setItem('socket_jwt', response.new_socket_jwt);
        }

        if (response.flash) {
            const toast = await this.toastCtrl.create({
                message: response.flash,
                duration: 2000,
                position: 'bottom',
                cssClass: (res instanceof HttpErrorResponse ? 'toast-error' : 'toast-success'),
                closeButtonText: 'Retour',
                showCloseButton: false
            });
            await toast.present();
        }

        if (response.required_update && response.required_update === true) {
            const alert = await this.alertCtrl.create({
                message: response.flash,
                buttons: [
                    {
                        text: 'Aller sur le store',
                        handler: () => {
                            if (this.toolsService.platform === 'android') {
                                // this.market.open(environment.android_package_name);
                            } else if (this.toolsService.platform === 'ios') {
                                // this.market.open(environment.ios_app_id);
                            }
                        }
                    }
                ]
            });
            await alert.present();
        }

        if (response.logout && response.logout === true) {
            this.toolsService.payloads = {};
            this.toolsService.jwt = null;
            localStorage.removeItem('jwt');
            localStorage.removeItem('socket_jwt');
            localStorage.setItem('logout-reason', response.flash);
            await this.navCtrl.navigateRoot('/connexion');

        }


        if (response.account_logout && response.account_logout === true) {
            await this.navCtrl.navigateRoot('/comptes');
        }
    }
}