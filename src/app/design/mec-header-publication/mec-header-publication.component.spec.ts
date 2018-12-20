import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MecHeaderPublicationComponent} from './mec-header-publication.component';

describe('MecHeaderPublicationComponent', () => {
    let component: MecHeaderPublicationComponent;
    let fixture: ComponentFixture<MecHeaderPublicationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MecHeaderPublicationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MecHeaderPublicationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
