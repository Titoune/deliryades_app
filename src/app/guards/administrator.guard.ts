import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ToolsService} from '../services/tools.service';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AdministratorGuard implements CanActivate {

    constructor(private navCtrl: NavController, private toolsService: ToolsService) {
    }


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.toolsService.allow_split_pane = true;
        this.toolsService.menu_type = 'administrator';

        if ('user' in this.toolsService.payloads) {
            if ('user_type' in this.toolsService.payloads && this.toolsService.payloads.user.admin !== 1) {
                return true;
            } else {
                this.navCtrl.navigateRoot('/comptes');
            }
        } else {
            this.navCtrl.navigateRoot('/');
        }
        return false;
    }
}
