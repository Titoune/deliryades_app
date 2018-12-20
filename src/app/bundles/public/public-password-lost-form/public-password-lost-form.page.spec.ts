import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicPasswordLostFormPage} from './public-password-lost-form.page';

describe('PublicPasswordLostFormPage', () => {
    let component: PublicPasswordLostFormPage;
    let fixture: ComponentFixture<PublicPasswordLostFormPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicPasswordLostFormPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicPasswordLostFormPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
