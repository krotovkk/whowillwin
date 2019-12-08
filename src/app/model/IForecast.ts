export interface IForecast {
  gameId:number
  goalsHomeTeam: number,
  goalsAwayTeam: number
}

export interface IForecastDto {
  [id: number]: IForecast
}