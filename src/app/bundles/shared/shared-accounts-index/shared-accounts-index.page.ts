import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../../../services/tools.service';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-shared-accounts-index',
    templateUrl: './shared-accounts-index.page.html',
    styleUrls: ['./shared-accounts-index.page.scss'],
})
export class SharedAccountsIndexPage implements OnInit {
    environment = environment;

    constructor(
        public toolsService: ToolsService,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
        if (this.toolsService.payloads.user.admin !== true) {
            this.navCtrl.navigateRoot('/annuaire');
        }
    }

}
