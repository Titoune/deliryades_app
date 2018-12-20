import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {EventsService} from '../../../services/events.service';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {booleanValidator, dateValidator, lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import * as moment from 'moment';

@Component({
  selector: 'app-user-event-create-form',
  templateUrl: './user-event-create-form.component.html',
  styleUrls: ['./user-event-create-form.component.scss']
})
export class UserEventCreateFormComponent implements OnInit {

  @Input() start: any = null;
  create_form: FormGroup;
  environment = environment;

  constructor(
      public eventsService: EventsService,
      public formBuilder: FormBuilder,
      public loadingCtrl: LoadingController,
      public toolsService: ToolsService,
      public modalCtrl: ModalController,
      public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    this.create_form = this.formBuilder.group({
      title: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
      content: [null, [requiredValidator, lengthBetweenValidator(2, 10000)]],
      start: [moment(this.start).format(), [requiredValidator, dateValidator]],
      end: [null, [requiredValidator, dateValidator]],
      activated: [null, [booleanValidator]],
    }, {updateOn: 'submit'});
  }

  async submit() {
    if (this.create_form.valid) {
      const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
      await loading.present();

      const request = await <any>this.eventsService.user_setCreateForm(this.create_form.value);

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
