import { TestBed, inject } from '@angular/core/testing';

import { L10nService } from './l10n.service';

describe('L10nService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [L10nService]
        });
    });

    it('should be created', inject([L10nService], (service: L10nService) => {
        expect(service).toBeTruthy();
    }));
});
