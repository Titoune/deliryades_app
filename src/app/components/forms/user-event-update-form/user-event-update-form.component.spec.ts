import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventUpdateFormComponent } from './user-event-update-form.component';

describe('UserEventUpdateFormComponent', () => {
  let component: UserEventUpdateFormComponent;
  let fixture: ComponentFixture<UserEventUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
