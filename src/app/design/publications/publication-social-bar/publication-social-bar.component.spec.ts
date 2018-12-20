import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationSocialBarComponent} from './publication-social-bar.component';

describe('PublicationSocialBarComponent', () => {
    let component: PublicationSocialBarComponent;
    let fixture: ComponentFixture<PublicationSocialBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicationSocialBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicationSocialBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
