import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {HttpClient} from '@angular/common/http';
import * as leaflet from 'leaflet';
import {requiredValidator} from '../../../custom-validators';

@Component({
    selector: 'app-user-address-update-form',
    templateUrl: './user-address-update-form.component.html',
    styleUrls: ['./user-address-update-form.component.scss']
})
export class UserAddressUpdateFormComponent implements OnInit {

    user: any = {};
    update_form: FormGroup;
    environment = environment;

    constructor(
        public usersService: UsersService,
        public formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public toolsService: ToolsService,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        private http: HttpClient,
    ) {
    }

    ngOnInit() {
        this.getMe();
    }


    getMe() {
        this.usersService.user_getMe(this.toolsService.payloads.user.id).subscribe(request => {
            this.user = request.data.user;
            this.buildForm();
        });
    }

    buildForm() {
        this.update_form = this.formBuilder.group({
            street_number: [this.user.street_number, [requiredValidator]],
            route: [this.user.route, [requiredValidator]],
            postal_code: [this.user.postal_code, [requiredValidator]],
            locality: [this.user.locality, [requiredValidator]],
            country: [this.user.country, [requiredValidator]],
            lat: [this.user.lat, [requiredValidator]],
            lng: [this.user.lng, [requiredValidator]]

        }, {updateOn: 'submit'});
    }


    async loadAddressUpdatePrompt(address = null) {
        const alert = await this.alertCtrl.create({
            header: 'Modifier mon adresse',
            inputs: [
                {
                    name: 'address',
                    value: address,
                    placeholder: 'Entrez une adresse postale'
                }
            ],
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {

                    }
                }, {
                    text: 'OK',
                    handler: async (data) => {
                        const loading = await this.loadingCtrl.create({message: 'recherche...'});
                        await loading.present();


                        // recherche adresse
                        this.http['get']('https://api-adresse.data.gouv.fr/search/?q=' + data.address + '&limit=5').subscribe((result: any) => {
                            if (result.features.length > 0) {
                                this.presentAdressChoices(result.features);
                            } else {
                                this.presentNotFoundAlert();
                            }
                            loading.dismiss();
                        }, error => {
                            loading.dismiss();
                            this.presentNotFoundAlert();
                        });
                    }
                }
            ]
        });

        await alert.present();
    }

    async presentNotFoundAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Impossible',
            message: 'Impossible de trouver une correspondance.',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        // this.loadAddressUpdatePrompt();
                    }
                },
                {
                    text: 'Réessayer',
                    handler: () => {
                        this.loadAddressUpdatePrompt();
                    }
                }
            ]
        });
        await alert.present();
    }


    async presentAdressChoices(features) {
        const inputs = [];

        for (const feature of features) {
            inputs.push({
                name: inputs.length,
                type: 'radio',
                label: feature.properties.label,
                value: feature,
                checked: (inputs.length === 0)
            });
        }


        const alert = await this.alertCtrl.create({
            header: 'Choisissez parmis ces propositions',
            inputs: inputs,
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: 'Valider',
                    handler: (feature) => {
                        this.update_form.patchValue({
                            street_number: feature.properties.housenumber,
                            route: feature.properties.street,
                            postal_code: feature.properties.postcode,
                            locality: feature.properties.city,
                            country: 'France',
                            lat: feature.geometry.coordinates[1],
                            lng: feature.geometry.coordinates[0],
                        });

                        this.submit();
                    }
                }
            ]
        });

        await alert.present();
    }


    async submit() {
        if (this.update_form.valid) {
            const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
            await loading.present();

            const request = await <any>this.usersService.user_setUpdateForm(this.user.id, this.update_form.value);

            await loading.dismiss();

            if (request.code === 200) {
                this.user.street_number = this.update_form.value.street_number;
                this.user.route = this.update_form.value.route;
                this.user.postal_code = this.update_form.value.postal_code;
                this.user.locality = this.update_form.value.locality;
                this.user.country = this.update_form.value.country;
                this.user.lat = this.update_form.value.lat;
                this.user.lng = this.update_form.value.lng;

                await this.modalCtrl.dismiss();
            } else {
                ToolsService.generateServerValidationErrors(this.update_form, request);
            }
        }
    }


    async onMapReady(map: any) {
        setTimeout(() => {
            map.invalidateSize();
        }, 0);

        map.setView([this.user.lat, this.user.lng], 14);
        leaflet.marker([this.user.lat, this.user.lng],
            {
                icon: leaflet.icon({
                    iconSize: [48, 48],
                    iconAnchor: [24, 48],
                    popupAnchor: [0, -20],
                    iconUrl: 'assets/icon/menu/marker_trop_cool.png'
                })
            }).addTo(map);


        map.addLayer(leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'wikimedia'}));
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


}
