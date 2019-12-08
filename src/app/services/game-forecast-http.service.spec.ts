import { TestBed } from '@angular/core/testing';

import { GameForecastHttpService } from './game-forecast-http.service';

describe('GameForecastHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameForecastHttpService = TestBed.get(GameForecastHttpService);
    expect(service).toBeTruthy();
  });
});
