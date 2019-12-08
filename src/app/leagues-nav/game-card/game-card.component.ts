import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ForecastLocalService } from 'src/app/services/forecast-local.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() game: IGame;
  forecast: string;

  constructor(private forecastLocalService: ForecastLocalService) { }

  ngOnInit() {
    this.forecast = this.forecastLocalService.getForecastByGameId(this.game.gameId);
  }

}
