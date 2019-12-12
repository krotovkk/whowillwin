import { Component, OnInit } from '@angular/core';
import { ForecastLocalService } from 'src/app/services/forecasts/forecast-local.service';
import { IForecast } from 'src/app/model/IForecast';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {
  forecasts: IForecast[];

  constructor(private localForecastService: ForecastLocalService) { }

  ngOnInit() {
    this.forecasts = Object.values(this.localForecastService.getForecasts())
  }

}
