import { Injectable } from '@angular/core';
import { IRoundGame } from '../model/iround-game';

@Injectable({
  providedIn: 'root'
})
export class GameLocalDataService {
  private roundGames: IRoundGame[];

  constructor() { }

  setRoundGames(data): void {
    this.roundGames = data.map(game => (
      {
        homeTeam: game.homeTeam,
        awayTeam: game.awayTeam,
        gameStatus: game.status,
        goalsHomeTeam: game.goalsHomeTeam,
        goalsAwayTeam: game.goalsAwayTeam,
        gameId: game.fixture_id
    }
    ))
  }

  getRoundGames(): IRoundGame[] {
    return this.roundGames
  }
}
