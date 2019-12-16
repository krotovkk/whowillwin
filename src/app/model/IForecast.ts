import { IGame } from './igame';

export interface IForecast {
  game:IGame
  goalsHomeTeam: number,
  goalsAwayTeam: number
}

export interface IForecastDto {
  [id: number]: IForecast
}