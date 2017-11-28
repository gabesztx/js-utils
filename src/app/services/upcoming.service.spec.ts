import { TestBed, inject } from '@angular/core/testing';

import { UpcomingService } from './upcoming.service';

describe('UpcomingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingService]
    });
  });

  it('should be created', inject([UpcomingService], (service: UpcomingService) => {
    expect(service).toBeTruthy();
  }));
});
