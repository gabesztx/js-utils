import { TestBed, async, inject } from '@angular/core/testing';

import { CoursesRoutingGuard } from './courses-routing.guard';

describe('CoursesRoutingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesRoutingGuard]
    });
  });

  it('should ...', inject([CoursesRoutingGuard], (guard: CoursesRoutingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
