import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorUserCreateFormComponent } from './administrator-user-create-form.component';

describe('AdministratorUserCreateFormComponent', () => {
  let component: AdministratorUserCreateFormComponent;
  let fixture: ComponentFixture<AdministratorUserCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorUserCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorUserCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
