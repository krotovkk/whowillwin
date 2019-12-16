import { Injectable } from '@angular/core';
import { IForecast } from '../model/IForecast';
import { IGame } from '../model/igame';

@Injectable({
  providedIn: 'root'
})
export class ForecastResultsService {

  constructor() { }

  defineForecastResult(forecast: IForecast, game: IGame) {
    const forecastGoalsDifference = forecast.goalsHomeTeam - forecast.goalsAwayTeam;
    const actualGameGoalsDifference = game.goalsHomeTeam - game.goalsAwayTeam;
    
    if (forecastGoalsDifference === actualGameGoalsDifference) {
      if (forecastGoalsDifference === 0){
        return forecast.goalsHomeTeam === game.goalsHomeTeam ?
          'correct':
          'partially';
      } else {
        return 'correct';
      }
    } else if(forecastGoalsDifference * actualGameGoalsDifference > 0) {
      return 'partially';
    } else {
      return 'wrong'
    }
  }

}
