import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressUpdateFormComponent } from './user-address-update-form.component';

describe('UserAddressUpdateFormComponent', () => {
  let component: UserAddressUpdateFormComponent;
  let fixture: ComponentFixture<UserAddressUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
