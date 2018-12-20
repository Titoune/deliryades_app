import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MecWidgetComponent} from './mec-widget.component';

describe('MecWidgetComponent', () => {
    let component: MecWidgetComponent;
    let fixture: ComponentFixture<MecWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MecWidgetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MecWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
