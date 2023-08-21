import { TestBed } from '@angular/core/testing';

import { CosmicService } from './cosmic.service';

describe('CosmicService', () => {
  let service: CosmicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
