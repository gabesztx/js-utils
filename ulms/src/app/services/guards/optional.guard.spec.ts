import { TestBed, async, inject } from '@angular/core/testing';

import { OptionalGuard } from './optional.guard';

describe('OptionalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionalGuard]
    });
  });

  it('should ...', inject([OptionalGuard], (guard: OptionalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
