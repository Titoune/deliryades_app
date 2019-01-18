import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'mec-publication-comment',
    templateUrl: './publication-comment.component.html',
    styleUrls: ['./publication-comment.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom

})
export class PublicationCommentComponent implements OnInit {
    environment = environment;

    constructor() {
    }

    ngOnInit() {
    }

}
