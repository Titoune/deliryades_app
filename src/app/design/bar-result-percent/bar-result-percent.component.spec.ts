import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BarResultPercentComponent} from './bar-result-percent.component';

describe('BarResultPercentComponent', () => {
    let component: BarResultPercentComponent;
    let fixture: ComponentFixture<BarResultPercentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BarResultPercentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BarResultPercentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
