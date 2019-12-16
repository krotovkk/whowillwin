import { Injectable } from '@angular/core';
import { IGame } from '../../model/igame';
import { games } from "../../example-games";

const exampleGames = games;

@Injectable({
  providedIn: 'root'
})
export class GameLocalDataService {
  private roundGames: IGame[];

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

  getRoundGames(): IGame[] {
    return this.roundGames.concat(exampleGames);
  }
}
