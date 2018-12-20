import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedAppAuthorizationsComponent} from './shared-app-authorizations.component';

describe('SharedAppAuthorizationsComponent', () => {
    let component: SharedAppAuthorizationsComponent;
    let fixture: ComponentFixture<SharedAppAuthorizationsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedAppAuthorizationsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedAppAuthorizationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
