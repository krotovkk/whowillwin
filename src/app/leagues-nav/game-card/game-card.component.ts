import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ForecastLocalService } from 'src/app/services/forecasts/forecast-local.service';
import { IForecast } from 'src/app/model/IForecast';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: IGame;
  
  forecast: IForecast;  
  forecastScore: string;
  forecastResult: string;

  constructor(private forecastLocalService: ForecastLocalService) { }

  ngOnInit() {
    this.forecast = this.forecastLocalService.getForecastByGameId(this.game.gameId);
    this.setForecastScore();
    if (this.game.gameStatus == "Match Finished" && this.forecast){
      this.defineForecastResult();
    }
  }

  private setForecastScore() {
    this.forecastScore = this.forecast ? this.forecast.goalsHomeTeam + ' : ' + this.forecast.goalsAwayTeam : 'Прогноза нет'
  }

  onForecastChange(newForecast: IForecast) {
    this.forecast = newForecast;
    this.setForecastScore();
  }

  defineForecastResult() {
    const forecastGoalsDifference = this.forecast.goalsHomeTeam - this.forecast.goalsAwayTeam;
    const actualGameGoalsDifference = this.game.goalsHomeTeam - this.game.goalsAwayTeam;
    
    if (forecastGoalsDifference === actualGameGoalsDifference) {
      if (forecastGoalsDifference === 0){
        this.forecastResult = this.forecast.goalsHomeTeam === this.game.goalsHomeTeam ?
          'correct':
          'partially';
      } else {
        this.forecastResult = 'correct';
      }
    } else if(forecastGoalsDifference * actualGameGoalsDifference > 0) {
      this.forecastResult = 'partially';
    } else {
      this.forecastResult = 'wrong'
    }
  }

}
