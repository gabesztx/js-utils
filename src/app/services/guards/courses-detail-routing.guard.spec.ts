import { TestBed, async, inject } from '@angular/core/testing';

import { CoursesDetailRoutingGuard } from './courses-detail-routing.guard';

describe('CoursesDetailRoutingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesDetailRoutingGuard]
    });
  });

  it('should ...', inject([CoursesDetailRoutingGuard], (guard: CoursesDetailRoutingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
