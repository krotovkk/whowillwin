import { ITeam } from './iteam';

export interface IGame {
  homeTeam: ITeam,
  awayTeam: ITeam,
  gameStatus?: string,
  goalsHomeTeam?: number,
  goalsAwayTeam?: number,
  gameId?: number,
}