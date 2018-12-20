import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPollCreateFormComponent } from './user-poll-create-form.component';

describe('UserPollCreateFormComponent', () => {
  let component: UserPollCreateFormComponent;
  let fixture: ComponentFixture<UserPollCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPollCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPollCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
