import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedParametersIndexPage} from './shared-parameters-index.page';

describe('SharedParametersIndexPage', () => {
    let component: SharedParametersIndexPage;
    let fixture: ComponentFixture<SharedParametersIndexPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedParametersIndexPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedParametersIndexPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
