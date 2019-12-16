import { Component, OnInit } from '@angular/core';
import { ForecastLocalService } from 'src/app/services/forecasts/forecast-local.service';
import { IForecast } from 'src/app/model/IForecast';
import { GameForecastHttpService } from 'src/app/services/forecasts/game-forecast-http.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  forecasts: IForecast[];
  forecastsDoesNotExist:boolean = true;

  constructor(
    private localForecastService: ForecastLocalService,
    private forecastService: GameForecastHttpService
  ) { }

  ngOnInit() {
    this.forecastService.getForecasts().subscribe(forecasts => {
      if (forecasts.length) {
        this.localForecastService.setForecasts(forecasts);
        this.forecasts = Object.values(this.localForecastService.getForecasts())
        this.forecastsDoesNotExist = false
      }
    })
  }

}
