import { TestBed, async, inject } from '@angular/core/testing';

import { CourseListApiLoaderGuard } from './course-list-api-loader.guard';

describe('CourseListApiLoaderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListApiLoaderGuard]
    });
  });

  it('should ...', inject([CourseListApiLoaderGuard], (guard: CourseListApiLoaderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
