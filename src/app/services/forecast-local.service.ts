import { Injectable } from '@angular/core';
import { IForecastDto } from '../model/IForecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastLocalService {
  private forecasts: IForecastDto;

  constructor() { }

  getForecasts(): IForecastDto {
    return this.forecasts;
  }

  setForecasts(forecasts: IForecastDto): void {
    this.forecasts = forecasts;
  }

  getForecastByGameId(gameId: number): string {
    return this.forecasts[gameId] ? 
      this.forecasts[gameId].goalsHomeTeam + ' : ' + this.forecasts[gameId].goalsAwayTeam : 
      'Прогноза нет'
  }
}
