import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUsersIndexPage } from './user-users-index.page';

describe('UserUsersIndexPage', () => {
  let component: UserUsersIndexPage;
  let fixture: ComponentFixture<UserUsersIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUsersIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUsersIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
