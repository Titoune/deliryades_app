import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {LoadingController, NavController} from '@ionic/angular';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-public-registration-validation',
    templateUrl: './public-registration-validation.page.html',
    styleUrls: ['./public-registration-validation.page.scss'],
})
export class PublicRegistrationValidationPage implements OnInit {

    public is_email_validated: boolean;
    environment = environment;

    constructor(
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public authService: AuthService,
        private route: ActivatedRoute
    ) {
    }

    async ngOnInit() {
        await this.emailValidation();
    }

    async emailValidation() {
        const loading = await this.loadingCtrl.create({message: 'validation...'});
        await loading.present();
        const request = await <any>this.authService.public_emailValidation({
            email: this.route.snapshot.paramMap.get('email'),
            token: this.route.snapshot.paramMap.get('token')
        });
        await loading.dismiss();

        if (request.code === 200) {
            this.is_email_validated = true;
        } else {
            this.is_email_validated = false;
        }

    }


}
