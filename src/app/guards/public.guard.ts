import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ToolsService} from '../services/tools.service';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class PublicGuard implements CanActivate {

    constructor(private navCtrl: NavController, private toolsService: ToolsService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.toolsService.allow_split_pane = false;

        this.toolsService.menu_type = 'public';

        if (state.url !== '/deconnexion' && 'user' in this.toolsService.payloads) {
            this.navCtrl.navigateRoot('/comptes');

        } else {
            return true;
        }
        return false;
    }
}
