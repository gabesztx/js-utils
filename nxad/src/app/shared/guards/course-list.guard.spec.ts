import { TestBed, async, inject } from '@angular/core/testing';

import { CourseListGuard } from './course-list.guard';

describe('CourseListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseListGuard]
    });
  });

  it('should ...', inject([CourseListGuard], (guard: CourseListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
