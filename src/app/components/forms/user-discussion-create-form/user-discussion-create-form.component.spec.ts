import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiscussionCreateFormComponent } from './user-discussion-create-form.component';

describe('UserDiscussionCreateFormComponent', () => {
  let component: UserDiscussionCreateFormComponent;
  let fixture: ComponentFixture<UserDiscussionCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDiscussionCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDiscussionCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
