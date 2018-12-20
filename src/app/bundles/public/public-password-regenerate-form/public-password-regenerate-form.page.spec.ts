import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicPasswordRegenerateFormPage} from './public-password-regenerate-form.page';

describe('PublicPasswordRegenerateFormPage', () => {
    let component: PublicPasswordRegenerateFormPage;
    let fixture: ComponentFixture<PublicPasswordRegenerateFormPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicPasswordRegenerateFormPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicPasswordRegenerateFormPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
