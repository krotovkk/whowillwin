import { ITeam } from './iteam';

export interface IGame {
  homeTeam: ITeam,
  awayTeam: ITeam,
  goalsHomeTeam?: number,
  goalsAwayTeam?: number,
}