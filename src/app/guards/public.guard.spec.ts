import {inject, TestBed} from '@angular/core/testing';

import {PublicGuard} from './public.guard';

describe('PublicGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PublicGuard]
        });
    });

    it('should ...', inject([PublicGuard], (guard: PublicGuard) => {
        expect(guard).toBeTruthy();
    }));
});
