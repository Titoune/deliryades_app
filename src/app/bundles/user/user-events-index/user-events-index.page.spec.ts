import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventsIndexPage } from './user-events-index.page';

describe('UserEventsIndexPage', () => {
  let component: UserEventsIndexPage;
  let fixture: ComponentFixture<UserEventsIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventsIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventsIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
