import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdministratorMenuHeaderComponent} from './administrator-menu-header.component';

describe('AdministratorMenuHeaderComponent', () => {
    let component: AdministratorMenuHeaderComponent;
    let fixture: ComponentFixture<AdministratorMenuHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdministratorMenuHeaderComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdministratorMenuHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
