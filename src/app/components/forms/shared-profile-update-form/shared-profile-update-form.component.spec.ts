import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedProfileUpdateFormComponent} from './shared-profile-update-form.component';

describe('SharedProfileUpdateFormComponent', () => {
    let component: SharedProfileUpdateFormComponent;
    let fixture: ComponentFixture<SharedProfileUpdateFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedProfileUpdateFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedProfileUpdateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
