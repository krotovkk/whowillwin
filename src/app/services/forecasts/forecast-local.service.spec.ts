import { TestBed } from '@angular/core/testing';

import { ForecastLocalService } from './forecast-local.service';

describe('ForecastLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecastLocalService = TestBed.get(ForecastLocalService);
    expect(service).toBeTruthy();
  });
});
