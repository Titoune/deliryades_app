import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotificationUpdateFormComponent } from './user-notification-update-form.component';

describe('UserNotificationUpdateFormComponent', () => {
  let component: UserNotificationUpdateFormComponent;
  let fixture: ComponentFixture<UserNotificationUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotificationUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotificationUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
