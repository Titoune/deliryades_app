import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-user-first-login',
    templateUrl: './user-first-login.page.html',
    styleUrls: ['./user-first-login.page.scss'],
})
export class UserFirstLoginPage implements OnInit {

    choice;
    create_code_form: FormGroup;
    create_family_form: FormGroup;
    environment = environment;

    constructor(
        public authService: AuthService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public toolsService: ToolsService,
        public modalCtrl: ModalController,
        public alertCtrl: AlertController,
        public navCtrl: NavController
    ) {
    }

    ngOnInit() {
        this.buildForms();
    }


    buildForms() {
        this.create_code_form = this.formBuilder.group({
            code: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
        }, {updateOn: 'submit'});

        this.create_family_form = this.formBuilder.group({
            name: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
        }, {updateOn: 'submit'});
    }

    async submitCodeForm() {
        if (this.create_code_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.authService.user_setCodeForm(this.create_code_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                await this.navCtrl.navigateRoot('annuaire');
            } else {
                ToolsService.generateServerValidationErrors(this.create_code_form, request);
            }
        }
    }

    async submitFamilyCreateForm() {
        if (this.create_family_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.authService.user_setFamilyCreateForm(this.create_family_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                await this.navCtrl.navigateRoot('annuaire');
            } else {
                ToolsService.generateServerValidationErrors(this.create_family_form, request);
            }
        }
    }

}
