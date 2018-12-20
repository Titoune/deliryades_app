import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorUserUpdateFormComponent } from './administrator-user-update-form.component';

describe('AdministratorUserUpdateFormComponent', () => {
  let component: AdministratorUserUpdateFormComponent;
  let fixture: ComponentFixture<AdministratorUserUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUserUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUserUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
