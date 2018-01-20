import { TestBed, async, inject } from '@angular/core/testing';

import { ClosedGuard } from './closed.guard';

describe('ClosedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClosedGuard]
    });
  });

  it('should ...', inject([ClosedGuard], (guard: ClosedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
