import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSmsCreateFormComponent } from './user-sms-create-form.component';

describe('UserSmsCreateFormComponent', () => {
  let component: UserSmsCreateFormComponent;
  let fixture: ComponentFixture<UserSmsCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSmsCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSmsCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
