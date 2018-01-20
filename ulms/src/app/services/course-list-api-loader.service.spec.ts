import { TestBed, inject } from '@angular/core/testing';

import { CourseListApiLoaderService } from './course-list-api-loader.service';

describe('CourseListApiLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListApiLoaderService]
    });
  });

  it('should be created', inject([CourseListApiLoaderService], (service: CourseListApiLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
