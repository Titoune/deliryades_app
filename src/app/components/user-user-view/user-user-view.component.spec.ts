import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUserViewComponent } from './user-user-view.component';

describe('UserUserViewComponent', () => {
  let component: UserUserViewComponent;
  let fixture: ComponentFixture<UserUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
