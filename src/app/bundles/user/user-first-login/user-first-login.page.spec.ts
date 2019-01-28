import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFirstLoginPage } from './user-first-login.page';

describe('UserFirstLoginPage', () => {
  let component: UserFirstLoginPage;
  let fixture: ComponentFixture<UserFirstLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFirstLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFirstLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
