import {TestBed} from '@angular/core/testing';

import {PollAnswersService} from './poll-answers.service';

describe('PollAnswersService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: PollAnswersService = TestBed.get(PollAnswersService);
        expect(service).toBeTruthy();
    });
});
