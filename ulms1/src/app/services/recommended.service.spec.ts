import { TestBed, inject } from '@angular/core/testing';

import { RecommendedService } from './recommended.service';

describe('RecommendedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendedService]
    });
  });

  it('should be created', inject([RecommendedService], (service: RecommendedService) => {
    expect(service).toBeTruthy();
  }));
});
