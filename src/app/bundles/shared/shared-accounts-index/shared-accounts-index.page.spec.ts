import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedAccountsIndexPage} from './shared-accounts-index.page';

describe('SharedAccountsIndexPage', () => {
    let component: SharedAccountsIndexPage;
    let fixture: ComponentFixture<SharedAccountsIndexPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedAccountsIndexPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedAccountsIndexPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
