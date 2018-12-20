import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicLogoutPage} from './public-logout.page';

describe('PublicLogoutPage', () => {
    let component: PublicLogoutPage;
    let fixture: ComponentFixture<PublicLogoutPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicLogoutPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicLogoutPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
