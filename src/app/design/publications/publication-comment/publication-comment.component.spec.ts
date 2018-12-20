import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PublicationCommentsComponent} from './publication-comments.component';

describe('PublicationCommentsComponent', () => {
    let component: PublicationCommentsComponent;
    let fixture: ComponentFixture<PublicationCommentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicationCommentsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicationCommentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
