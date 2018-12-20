import {Component, OnInit} from '@angular/core';
import {ToolsService} from '../../../services/tools.service';
import {ModalController} from '@ionic/angular';
import {environment} from '../../../../environments/environment';
import {Diagnostic} from '@ionic-native/diagnostic/ngx';
import {AuthorizationsService} from '../../../services/authorizations.service';

@Component({
    selector: 'app-shared-app-authorizations',
    templateUrl: './shared-app-authorizations.component.html',
    styleUrls: ['./shared-app-authorizations.component.scss']
})

export class SharedAppAuthorizationsComponent implements OnInit {
    environment = environment;

    constructor(public toolsService: ToolsService,
                public modalCtrl: ModalController,
                public diagnostic: Diagnostic,
                public authorizationsService: AuthorizationsService
    ) {
    }

    ngOnInit() {
    }

}
