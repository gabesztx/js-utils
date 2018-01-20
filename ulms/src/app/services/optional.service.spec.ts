import { TestBed, inject } from '@angular/core/testing';

import { OptionalService } from './optional.service';

describe('OptionalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionalService]
    });
  });

  it('should be created', inject([OptionalService], (service: OptionalService) => {
    expect(service).toBeTruthy();
  }));
});
