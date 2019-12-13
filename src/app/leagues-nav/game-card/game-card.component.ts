import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ForecastLocalService } from 'src/app/services/forecasts/forecast-local.service';
import { IForecast } from 'src/app/model/IForecast';
import { ForecastResultsService } from 'src/app/services/forecast-results.service';


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

  constructor(
    private forecastLocalService: ForecastLocalService,
    private forecastResultService: ForecastResultsService
  ) { }

  ngOnInit() {
    this.forecast = this.forecastLocalService.getForecastByGameId(this.game.gameId);
    this.setForecastScore();
    if (this.game.gameStatus == "Match Finished" && this.forecast){
      this.forecastResult = this.forecastResultService.defineForecastResult(this.forecast, this.game);
    }
  }

  private setForecastScore() {
    this.forecastScore = this.forecast ? this.forecast.goalsHomeTeam + ' : ' + this.forecast.goalsAwayTeam : 'Прогноза нет';
  }

  onForecastChange(newForecast: IForecast) {
    this.forecast = newForecast;
    this.setForecastScore();
  }

}
