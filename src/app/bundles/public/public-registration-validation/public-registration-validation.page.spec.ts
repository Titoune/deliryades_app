import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRegistrationValidationPage } from './public-registration-validation.page';

describe('PublicRegistrationValidationPage', () => {
  let component: PublicRegistrationValidationPage;
  let fixture: ComponentFixture<PublicRegistrationValidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicRegistrationValidationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRegistrationValidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
