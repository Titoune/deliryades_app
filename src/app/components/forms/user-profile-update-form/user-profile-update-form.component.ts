import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {UsersService} from '../../../services/users.service';
import {ActionSheetController, AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {dateValidator, emailValidator, inListValidator, lengthBetweenValidator, naturalNumberValidator, regexValidator, requiredValidator} from '../../../custom-validators';
import * as moment from 'moment';
import {AuthorizationsService} from '../../../services/authorizations.service';
import {Camera} from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';

@Component({
    selector: 'app-user-profile-update-form',
    templateUrl: './user-profile-update-form.component.html',
    styleUrls: ['./user-profile-update-form.component.scss']
})
export class UserProfileUpdateFormComponent implements OnInit {
    @ViewChild('user_picture') user_picture: any;

    user: any = {};
    update_form: FormGroup;
    environment = environment;
    moment = moment;
    prefix = [];

    constructor(
        public userService: UsersService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public authorizations: AuthorizationsService,
        public actionSheetCtrl: ActionSheetController,
        private camera: Camera,
        private webview: WebView
    ) {
    }

    ngOnInit() {
        for (let i = 30; i < 50; i++) {
            this.prefix.push('+' + i);
        }
        this.getUser();
    }

    getUser() {
        this.userService.user_getMe(this.toolsService.payloads.user.id).subscribe(request => {
            this.user = request.data.user;
            this.buildForm();
        });
    }

    buildForm() {
        this.update_form = this.formBuilder.group({
            sex: [this.user.sex, [requiredValidator, inListValidator(['m', 'f'])]],
            firstname: [this.user.firstname, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
            lastname: [this.user.lastname, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
            email: [this.user.email, [emailValidator]],
            birth: [moment(this.user.birth).format('YYYY-MM-DD'), [dateValidator]],
            cellphone_prefix: [this.user.cellphone_prefix],
            cellphone: [this.user.cellphone, [regexValidator('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$', 'veuillez vérifier ce champs')]],
            phone_prefix: [this.user.phone_prefix],
            phone: [this.user.phone, [regexValidator('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$', 'veuillez vérifier ce champs')]],
            presentation: [this.user.presentation, [lengthBetweenValidator(2, 10000)]],
            branch: [this.user.branch, [lengthBetweenValidator(1, 8), naturalNumberValidator]],
            profession: [this.user.profession, [lengthBetweenValidator(1, 20)]]

        }, {updateOn: 'submit'});
    }


    async submit() {
        if (this.update_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.userService.user_setUpdateForm(this.user.id, this.update_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                await this.modalCtrl.dismiss();
            } else {
                ToolsService.generateServerValidationErrors(this.update_form, request);
            }
        }
    }

    async cancelForm() {
        if (this.update_form && this.update_form.dirty === true) {
            const alert = await this.alertCtrl.create({
                header: 'Voulez-vous vraiment quitter le formulaire ?',
                message: 'Toutes les données saisies seront perdues, voulez-vous vraiment annuler cette opération ?',
                buttons: [
                    {
                        text: 'Non',
                        role: 'cancel',
                        handler: () => {
                        }
                    }, {
                        text: 'Oui',
                        handler: async () => {
                            await this.modalCtrl.dismiss();
                        }
                    }
                ]
            });

            await alert.present();
        } else {
            await this.modalCtrl.dismiss();
        }
    }


    async loadPictureActionSheet() {
        const options = [];

        options.push({
            text: 'Sélectionner une photo',
            handler: () => {
                this.authorizations.requestExternalStorageAuthorization().then(res => {
                    if (res === true) {
                        this.selectPicture();
                    }
                });
            }
        });
        options.push({
            text: 'Prendre une photo',
            handler: () => {
                this.authorizations.requestCameraAuthorization().then(res => {
                    if (res === true) {
                        this.takePicture();
                    }
                });
            }
        });
        options.push({
            text: 'Annuler',
            handler: () => {

            }
        });

        const actionSheet = await this.actionSheetCtrl.create({
            // overlayIndex: 10,
            header: 'Actions',
            buttons: options
        });
        await actionSheet.present();

    }

    async takePicture() {
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true,
            cameraDirection: 1,
        }).then(async (result) => {
            result = this.webview.convertFileSrc(result);
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();


            this.uploadPicture(result).then(async data => {

                if (this.toolsService.platform === 'ios') {
                    result = result.replace(/^file:\/\//, '');
                }

                this.user_picture.nativeElement.src = result;

                await loading.dismiss();
            });

        }, (err) => {
            // Handle error
        });
    }


    async selectPicture() {
        this.camera.getPicture({
            quality: 100,
            sourceType: 0,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 800,
            targetHeight: 800,
            correctOrientation: true,
            cameraDirection: 1,
        }).then(async (result) => {
            result = this.webview.convertFileSrc(result);
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();


            this.uploadPicture(result).then(async data => {

                if (this.toolsService.platform === 'ios') {
                    result = result.replace(/^file:\/\//, '');
                }

                this.user_picture.nativeElement.src = result;

                await loading.dismiss();
            });

        }, (err) => {
            // Handle error
        });
    }


    async uploadPicture(picture_uri) {


        const loading = await this.loadingCtrl.create({message: 'enregistrement de la photo...'});
        await loading.present();

        const request = await <any>this.userService.user_uploadUserPicture(picture_uri);

        await loading.dismiss();

        if (request.code === 200) {
            await this.modalCtrl.dismiss();
        }
    }

}
