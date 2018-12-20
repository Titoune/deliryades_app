import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CitizenMenuHeaderComponent} from './citizen-menu-header.component';

describe('CitizenMenuHeaderComponent', () => {
    let component: CitizenMenuHeaderComponent;
    let fixture: ComponentFixture<CitizenMenuHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CitizenMenuHeaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CitizenMenuHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
