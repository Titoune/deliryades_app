import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventCreateFormComponent } from './user-event-create-form.component';

describe('UserEventCreateFormComponent', () => {
  let component: UserEventCreateFormComponent;
  let fixture: ComponentFixture<UserEventCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
