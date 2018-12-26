import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {UsersService} from '../../../services/users.service';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {ToolsService} from '../../../services/tools.service';
import {dateValidator, inListValidator, lengthBetweenValidator, regexValidator, requiredValidator} from '../../../custom-validators';

@Component({
  selector: 'app-shared-notification-update-form',
  templateUrl: './shared-notification-update-form.component.html',
  styleUrls: ['./shared-notification-update-form.component.scss']
})
export class SharedNotificationUpdateFormComponent implements OnInit {

  user: any = {};
  update_form: FormGroup;
  environment = environment;

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
    this.getUser();
  }

  getUser() {
    this.userService.shared_getMe(this.toolsService.payloads.user.id).subscribe(request => {
      this.user = request.data.user;
      this.buildForm();
    });
  }

  buildForm() {
    this.update_form = this.formBuilder.group({
      sex: [this.user.sex, [requiredValidator, inListValidator(['m', 'f'])]],
      firstname: [this.user.firstname, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
      lastname: [this.user.lastname, [requiredValidator, regexValidator('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð \'-]+$', 'veuillez vérifier ce champs')]],
      email: [this.user.email, [requiredValidator]],
      birth: [this.user.birth, [requiredValidator, dateValidator]],
      presentation: [this.user.presentation, [lengthBetweenValidator(2, 10000)]]
    }, {updateOn: 'submit'});
  }
}
