import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCodeFormComponent } from './registration-code-form.component';

describe('RegistrationCodeFormComponent', () => {
  let component: RegistrationCodeFormComponent;
  let fixture: ComponentFixture<RegistrationCodeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationCodeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
