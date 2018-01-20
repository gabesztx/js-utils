import { TestBed, async, inject } from '@angular/core/testing';

import { UpcomingGuard } from './upcoming.guard';

describe('UpcomingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingGuard]
    });
  });

  it('should ...', inject([UpcomingGuard], (guard: UpcomingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
