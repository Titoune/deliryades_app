import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationVideoComponent} from './publication-video.component';

describe('PublicationVideoComponent', () => {
    let component: PublicationVideoComponent;
    let fixture: ComponentFixture<PublicationVideoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicationVideoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicationVideoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
