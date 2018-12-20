import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'mec-widget',
    templateUrl: './mec-widget.component.html',
    styleUrls: ['./mec-widget.component.scss'],
    encapsulation: ViewEncapsulation.Native

})
export class MecWidgetComponent implements OnInit {
    @Input() background = '#eee';
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
