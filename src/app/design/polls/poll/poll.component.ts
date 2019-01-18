import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import * as moment from 'moment';
import {ToolsService} from '../../../services/tools.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-poll',
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class PollComponent implements OnInit {
    @Input() poll: any;
    environment = environment;
    moment = moment;

    constructor(public toolsService: ToolsService) {
    }

    ngOnInit() {
    }

}
