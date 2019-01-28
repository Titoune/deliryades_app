import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWebsiteTermsOfUseComponent } from './public-website-terms-of-use.component';

describe('PublicWebsiteTermsOfUseComponent', () => {
  let component: PublicWebsiteTermsOfUseComponent;
  let fixture: ComponentFixture<PublicWebsiteTermsOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicWebsiteTermsOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicWebsiteTermsOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
