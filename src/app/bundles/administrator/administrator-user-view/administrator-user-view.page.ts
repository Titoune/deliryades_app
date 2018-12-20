import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ActionSheetController, AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute} from '@angular/router';
import {AdministratorUserUpdateFormComponent} from '../../../components/forms/administrator-user-update-form/administrator-user-update-form.component';

@Component({
    selector: 'app-administrator-user-view',
    templateUrl: './administrator-user-view.page.html',
    styleUrls: ['./administrator-user-view.page.scss'],
})
export class AdministratorUserViewPage implements OnInit {

    public user: any = {};
    environment = environment;

    constructor(
        public usersService: UsersService,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public route: ActivatedRoute,
    ) {
    }


    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.usersService.administrator_getUser(this.route.snapshot.paramMap.get('user_id')).subscribe(request => {
            this.user = request.data.user;
        });
    }

    async showUserUpdateFormModal(user) {
        const modal = await this.modalCtrl.create({
            component: AdministratorUserUpdateFormComponent,
            componentProps: {user: user},
            backdropDismiss: false
        });
        return await modal.present();
    }

    async deleteUser(user) {
        const alert = await this.alertCtrl.create({
            header: 'Confirmation',
            message: 'Voulez-vous vraiment faire cette action ?',
            buttons: [{
                text: 'Annuler',

                role: 'cancel',
                handler: () => {
                }
            }, {
                text: 'Supprimer',
                role: 'destructive',

                handler: async () => {
                    const loading = await this.loadingCtrl.create({message: 'suppression...'});
                    await loading.present();

                    const request = await <any>this.usersService.administrator_deleteUser(user.id);

                    await loading.dismiss();

                    if (request.code === 200) {

                    }
                }
            }]
        });
        await alert.present();
    }
}

