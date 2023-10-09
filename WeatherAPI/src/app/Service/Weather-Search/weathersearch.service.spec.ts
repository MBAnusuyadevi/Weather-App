import { TestBed } from '@angular/core/testing';

import { WeathersearchService } from './weathersearch.service';

describe('WeathersearchService', () => {
  let service: WeathersearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathersearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
