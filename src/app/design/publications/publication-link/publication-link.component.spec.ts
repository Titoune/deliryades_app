import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationLinkComponent} from './publication-link.component';

describe('PublicationLinkComponent', () => {
    let component: PublicationLinkComponent;
    let fixture: ComponentFixture<PublicationLinkComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicationLinkComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicationLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
