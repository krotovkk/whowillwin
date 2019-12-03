import { TestBed } from '@angular/core/testing';

import { FootballApiHttpService } from './football-api-http.service';

describe('FootballApiHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FootballApiHttpService = TestBed.get(FootballApiHttpService);
    expect(service).toBeTruthy();
  });
});
