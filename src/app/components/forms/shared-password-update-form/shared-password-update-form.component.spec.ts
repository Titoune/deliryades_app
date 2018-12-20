import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedPasswordUpdateFormComponent} from './shared-password-update-form.component';

describe('SharedPasswordUpdateFormComponent', () => {
    let component: SharedPasswordUpdateFormComponent;
    let fixture: ComponentFixture<SharedPasswordUpdateFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedPasswordUpdateFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedPasswordUpdateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
