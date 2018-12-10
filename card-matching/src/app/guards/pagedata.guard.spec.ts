import { TestBed, async, inject } from '@angular/core/testing';

import { PagedataGuard } from './pagedata.guard';

describe('PagedataGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagedataGuard]
    });
  });

  it('should ...', inject([PagedataGuard], (guard: PagedataGuard) => {
    expect(guard).toBeTruthy();
  }));
});
