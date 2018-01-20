import { TestBed, inject } from '@angular/core/testing';

import { ClosedService } from './closed.service';

describe('ClosedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClosedService]
    });
  });

  it('should be created', inject([ClosedService], (service: ClosedService) => {
    expect(service).toBeTruthy();
  }));
});
