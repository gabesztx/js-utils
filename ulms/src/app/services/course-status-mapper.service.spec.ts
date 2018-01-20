import { TestBed, inject } from '@angular/core/testing';

import { CourseStatusMapperService } from './course-status-mapper.service';

describe('CourseStatusMapperService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CourseStatusMapperService]
        });
    });

    it('should be created', inject([CourseStatusMapperService], (service: CourseStatusMapperService) => {
        expect(service).toBeTruthy();
    }));
});
