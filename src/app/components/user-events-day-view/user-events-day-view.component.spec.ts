import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventsDayViewComponent } from './user-events-day-view.component';

describe('UserEventsDayViewComponent', () => {
  let component: UserEventsDayViewComponent;
  let fixture: ComponentFixture<UserEventsDayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventsDayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventsDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
