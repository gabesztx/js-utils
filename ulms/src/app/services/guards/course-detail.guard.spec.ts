import { TestBed, async, inject } from '@angular/core/testing';

import { CourseDetailGuard } from './course-detail.guard';

describe('CourseDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseDetailGuard]
    });
  });

  it('should ...', inject([CourseDetailGuard], (guard: CourseDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
