import { Injectable } from '@angular/core';
import { IForecastDto, IForecast } from '../../model/IForecast';

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

  getForecastByGameId(gameId: number): IForecast {
    return this.forecasts[gameId] ? this.forecasts[gameId] : null
  }
}
