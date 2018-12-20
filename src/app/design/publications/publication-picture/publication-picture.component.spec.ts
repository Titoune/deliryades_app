import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationPictureComponent} from './publication-picture.component';

describe('PublicationPictureComponent', () => {
    let component: PublicationPictureComponent;
    let fixture: ComponentFixture<PublicationPictureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicationPictureComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicationPictureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
