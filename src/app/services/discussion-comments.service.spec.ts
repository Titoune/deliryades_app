import { TestBed } from '@angular/core/testing';

import { DiscussionCommentsService } from './discussion-comments.service';

describe('DiscussionCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscussionCommentsService = TestBed.get(DiscussionCommentsService);
    expect(service).toBeTruthy();
  });
});
