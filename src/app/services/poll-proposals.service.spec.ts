import {TestBed} from '@angular/core/testing';

import {PollProposalsService} from './poll-proposals.service';

describe('PollProposalsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PollProposalsService = TestBed.get(PollProposalsService);
        expect(service).toBeTruthy();
    });
});
