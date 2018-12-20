import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';

import {environment} from '../../environments/environment';
import {ToolsService} from './tools.service';

@Injectable({
    providedIn: 'root'
})
export class SocketService {

    public administrator_socket: any = null;
    public city_socket: any = null;
    public private_socket: any = null;


    constructor(
        public toolsService: ToolsService
    ) {
    }

    disconnect() {
        return new Promise(resolve => {
            if (this.administrator_socket !== null) {
                this.administrator_socket.disconnect();
            }

            if (this.city_socket !== null) {
                this.city_socket.disconnect();
            }

            if (this.private_socket !== null) {
                this.private_socket.disconnect();
            }

            resolve();
        });

    }

    getAdministratorSocket() {
        return new Promise(resolve => {
            if ((this.administrator_socket === null || this.administrator_socket.nsp !== '/administrator' || this.administrator_socket.connected === false) && ('user_type' in this.toolsService.payloads && ['administrator'].indexOf(this.toolsService.payloads.user_type) !== -1)) {

                this.administrator_socket = io(environment.socketIoConfig.url + '/administrator', {
                    query: {
                        token: this.toolsService.socket_jwt
                    },

                });
            }

            resolve(this.administrator_socket);
        });
    }


    getCitySocket() {
        return new Promise(resolve => {

            // Socket défini, sur le bon dynamic et non connecté => on reconnecte
            if (this.city_socket !== null && this.city_socket.nsp === '/dynamic-' + this.toolsService.payloads.current_city_id && this.city_socket.connected === false) {
                this.city_socket.connect();
            }
            // Socket non défini ou sur le mauvais dynamic avec un user_type valide => nouvelle connection
            else if ((this.city_socket === null || this.city_socket.nsp !== '/dynamic-' + this.toolsService.payloads.current_city_id) && ('user_type' in this.toolsService.payloads && ['mayor', 'citizen', 'mandatary'].indexOf(this.toolsService.payloads.user_type) !== -1)) {
                this.city_socket = io(environment.socketIoConfig.url + '/dynamic-' + this.toolsService.payloads.current_city_id, {
                    query: {
                        token: this.toolsService.socket_jwt
                    },

                });
            }
            resolve(this.city_socket);
        });
    }


    getPrivateSocket() {
        return new Promise(resolve => {
            if (this.private_socket !== null && this.private_socket.nsp === '/perso-' + this.toolsService.payloads.current_user_id && this.private_socket.connected === false) {
                this.private_socket.connect();
            } else if ((this.private_socket === null || this.private_socket.nsp !== '/perso-' + this.toolsService.payloads.current_user_id) && ('current_user_id' in this.toolsService.payloads && ['mayor', 'citizen', 'mandatary', 'administrator'].indexOf(this.toolsService.payloads.user_type) !== -1)) {
                this.private_socket = io(environment.socketIoConfig.url + '/perso-' + this.toolsService.payloads.current_user_id, {
                    query: {
                        token: this.toolsService.socket_jwt
                    },
                });
            }
            resolve(this.private_socket);
        });
    }
}