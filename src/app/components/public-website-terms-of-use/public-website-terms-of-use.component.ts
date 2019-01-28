import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ModalController} from '@ionic/angular';
import {ConfigurationsService} from '../../services/configurations.service';

@Component({
  selector: 'app-public-website-terms-of-use',
  templateUrl: './public-website-terms-of-use.component.html',
  styleUrls: ['./public-website-terms-of-use.component.scss']
})
export class PublicWebsiteTermsOfUseComponent implements OnInit {
  website_terms_of_use: string = null;
  environment = environment;

  constructor(
      public modalCtrl: ModalController,
      public configurationsService: ConfigurationsService,
  ) {
  }

  ngOnInit() {
    this.getWebsiteTermsOfUse();
  }


  getWebsiteTermsOfUse() {
    this.configurationsService.public_getWebsiteTermsOfUse().subscribe(request => {
      this.website_terms_of_use = request.data.website_terms_of_use;
    });
  }
}
