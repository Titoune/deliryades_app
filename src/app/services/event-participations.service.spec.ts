import { TestBed } from '@angular/core/testing';

import { EventParticipationsService } from './event-participations.service';

describe('EventParticipationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventParticipationsService = TestBed.get(EventParticipationsService);
    expect(service).toBeTruthy();
  });
});
