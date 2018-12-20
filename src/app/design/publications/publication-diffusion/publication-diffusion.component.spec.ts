import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationDiffusionComponent} from './publication-diffusion.component';

describe('PublicationDiffusionComponent', () => {
    let component: PublicationDiffusionComponent;
    let fixture: ComponentFixture<PublicationDiffusionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicationDiffusionComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicationDiffusionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
