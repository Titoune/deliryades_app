import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationPdfComponent} from './publication-pdf.component';

describe('PublicationPdfComponent', () => {
    let component: PublicationPdfComponent;
    let fixture: ComponentFixture<PublicationPdfComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicationPdfComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicationPdfComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
