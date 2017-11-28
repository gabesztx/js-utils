import { TestBed, async, inject } from '@angular/core/testing';

import { RecommendedGuard } from './recommended.guard';

describe('RecommendedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendedGuard]
    });
  });

  it('should ...', inject([RecommendedGuard], (guard: RecommendedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
