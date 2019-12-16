import { TestBed } from '@angular/core/testing';

import { GameLocalDataService } from './game-local-data.service';

describe('GameLocalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameLocalDataService = TestBed.get(GameLocalDataService);
    expect(service).toBeTruthy();
  });
});
