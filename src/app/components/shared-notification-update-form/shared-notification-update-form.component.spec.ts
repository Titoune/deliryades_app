import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNotificationUpdateFormComponent } from './shared-notification-update-form.component';

describe('SharedNotificationUpdateFormComponent', () => {
  let component: SharedNotificationUpdateFormComponent;
  let fixture: ComponentFixture<SharedNotificationUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedNotificationUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedNotificationUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
