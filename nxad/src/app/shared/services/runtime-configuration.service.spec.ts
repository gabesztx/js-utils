import { TestBed, inject } from '@angular/core/testing';

import { RuntimeConfigurationService } from './runtime-configuration.service';

describe('RuntimeConfigurationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RuntimeConfigurationService]
        });
    });

    it('should be created', inject([RuntimeConfigurationService], (service: RuntimeConfigurationService) => {
        expect(service).toBeTruthy();
    }));
});
