import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import * as moment from 'moment';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {dateValidator, emailValidator, inListValidator, lengthBetweenValidator, naturalNumberValidator, regexValidator, requiredValidator} from '../../../custom-validators';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})
export class UserCreateFormComponent implements OnInit {

  user: any = {};
  create_form: FormGroup;
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
    this.create_form = this.formBuilder.group({
      sex: [null, [requiredValidator, inListValidator(['m', 'f'])]],
      firstname: [null, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
      lastname: [null, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
      email: [null, [emailValidator]],
      birth: [null, [dateValidator]],
      death: [null, [dateValidator]],
      cellphone_prefix: ['+33'],
      cellphone: [null, [regexValidator('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$', 'veuillez vérifier ce champs')]],
      phone_prefix: ['+33'],
      phone: [null, [regexValidator('^(?:(?:\\+|00)33|0)\\s*[1-9](?:[\\s.-]*\\d{2}){4}$', 'veuillez vérifier ce champs')]],
      presentation: [null, [lengthBetweenValidator(2, 10000)]],
      branch: [null, [lengthBetweenValidator(1, 8), naturalNumberValidator]],
      profession: [null, [lengthBetweenValidator(1, 20)]]

    }, {updateOn: 'submit'});
  }


  async submit() {
    if (this.create_form.valid) {
      const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
      await loading.present();

      const request = await <any>this.userService.administrator_setCreateForm(this.create_form.value);

      await loading.dismiss();

      if (request.code === 200) {
        await this.modalCtrl.dismiss();
      } else {
        ToolsService.generateServerValidationErrors(this.create_form, request);
      }
    }
  }

  async cancelForm() {
    if (this.create_form && this.create_form.dirty === true) {
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
