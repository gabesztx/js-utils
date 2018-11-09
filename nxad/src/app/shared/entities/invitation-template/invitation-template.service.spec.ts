import { TestBed, inject } from '@angular/core/testing';

import { InvitationTemplateService } from './invitation-template.service';

describe('InvitationsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [InvitationTemplateService]
        });
    });

    it('should be created', inject([InvitationTemplateService], (service: InvitationTemplateService) => {
        expect(service).toBeTruthy();
    }));
});
