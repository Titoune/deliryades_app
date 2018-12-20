import { TestBed } from '@angular/core/testing';

import { EventCommentsService } from './event-comments.service';

describe('EventCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventCommentsService = TestBed.get(EventCommentsService);
    expect(service).toBeTruthy();
  });
});
