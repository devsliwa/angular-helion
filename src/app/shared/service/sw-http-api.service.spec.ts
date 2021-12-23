import { TestBed } from '@angular/core/testing';

import { SwHttpApiService } from './sw-http-api.service';

describe('SwHttpApiService', () => {
  let service: SwHttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwHttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
