import { TestBed } from '@angular/core/testing';

import { ForecastResultsService } from './forecast-results.service';

describe('ForecastResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecastResultsService = TestBed.get(ForecastResultsService);
    expect(service).toBeTruthy();
  });
});
