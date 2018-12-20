import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorDashboardIndexPage } from './administrator-dashboard-index.page';

describe('AdministratorDashboardIndexPage', () => {
  let component: AdministratorDashboardIndexPage;
  let fixture: ComponentFixture<AdministratorDashboardIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorDashboardIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorDashboardIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
