import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPollUpdateFormComponent } from './user-poll-update-form.component';

describe('UserPollUpdateFormComponent', () => {
  let component: UserPollUpdateFormComponent;
  let fixture: ComponentFixture<UserPollUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPollUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPollUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
