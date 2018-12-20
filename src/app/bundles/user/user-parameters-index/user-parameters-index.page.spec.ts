import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParametersIndexPage } from './user-parameters-index.page';

describe('UserParametersIndexPage', () => {
  let component: UserParametersIndexPage;
  let fixture: ComponentFixture<UserParametersIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserParametersIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserParametersIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
