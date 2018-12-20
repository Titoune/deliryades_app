import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedBugReportCreateFormComponent} from './shared-bug-report-create-form.component';

describe('SharedBugReportCreateFormComponent', () => {
    let component: SharedBugReportCreateFormComponent;
    let fixture: ComponentFixture<SharedBugReportCreateFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedBugReportCreateFormComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedBugReportCreateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
