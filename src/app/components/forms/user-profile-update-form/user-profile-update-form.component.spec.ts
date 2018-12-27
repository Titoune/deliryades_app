import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileUpdateFormComponent } from './user-profile-update-form.component';

describe('UserProfileUpdateFormComponent', () => {
  let component: UserProfileUpdateFormComponent;
  let fixture: ComponentFixture<UserProfileUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
