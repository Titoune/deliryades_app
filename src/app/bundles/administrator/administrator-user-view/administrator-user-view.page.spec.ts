import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorUserViewPage } from './administrator-user-view.page';

describe('AdministratorUserViewPage', () => {
  let component: AdministratorUserViewPage;
  let fixture: ComponentFixture<AdministratorUserViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUserViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUserViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
