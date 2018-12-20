import { TestBed } from '@angular/core/testing';

import { ChatCommentsService } from './chat-comments.service';

describe('ChatCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatCommentsService = TestBed.get(ChatCommentsService);
    expect(service).toBeTruthy();
  });
});
