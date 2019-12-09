import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ForecastLocalService } from 'src/app/services/forecast-local.service';
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

  constructor(private forecastLocalService: ForecastLocalService) { }

  ngOnInit() {
    this.forecast = this.forecastLocalService.getForecastByGameId(this.game.gameId);
    this.setForecastScore();
  }

  private setForecastScore() {
    this.forecastScore = this.forecast ? this.forecast.goalsHomeTeam + ' : ' + this.forecast.goalsAwayTeam : 'Прогноза нет'
  }

  onForecastChange(newForecast: IForecast) {
    this.forecast = newForecast;
    this.setForecastScore();
  }

}
