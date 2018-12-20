import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {booleanValidator, dateValidator, lengthBetweenValidator, requiredValidator} from '../../../custom-validators';
import {PollsService} from '../../../services/polls.service';

@Component({
  selector: 'app-user-poll-update-form',
  templateUrl: './user-poll-update-form.component.html',
  styleUrls: ['./user-poll-update-form.component.scss']
})
export class UserPollUpdateFormComponent implements OnInit {

  @Input() poll: any = {};
  update_form: FormGroup;
  environment = environment;

  constructor(
      public pollsService: PollsService,
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
    this.update_form = this.formBuilder.group({
      title: [this.poll.title, [requiredValidator, lengthBetweenValidator(2, 10000)]],
      question: [this.poll.question, [requiredValidator, lengthBetweenValidator(2, 10000)]],
      description: [this.poll.description, [requiredValidator, lengthBetweenValidator(2, 10000)]],
      expiration: [this.poll.expiration, [requiredValidator, dateValidator]],
      activated: [this.poll.activated, [booleanValidator]],
    }, {updateOn: 'submit'});
  }

  async submit() {
    if (this.update_form.valid) {
      const loading = await this.loadingCtrl.create({message: 'enregistrement...'});
      await loading.present();

      const request = await <any>this.pollsService.user_setUpdateForm(this.poll.id, this.update_form.value);

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


}
