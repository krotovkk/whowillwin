import { Component, OnInit, Input } from '@angular/core';
import { IForecast } from 'src/app/model/IForecast';
import { FootballApiHttpService } from 'src/app/services/api/football-api-http.service';
import { ForecastResultsService } from 'src/app/services/forecast-results.service';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent implements OnInit {
  @Input() forecast: IForecast;
  game;
  actualScore: string;
  forecastScore: string;
  forecastResult: string

  constructor(
    private footballAPIService: FootballApiHttpService,
    private forecastResultService: ForecastResultsService
  ) { }

  ngOnInit() {
    this.forecastScore = this.forecast.goalsHomeTeam + ' : ' + this.forecast.goalsAwayTeam;
    this.footballAPIService.getGameByFixturesId(this.forecast.game.gameId).subscribe(data => {
      this.game = data[0];
        
      if (this.game.status === "Match Finished") {
        this.forecastResult = this.forecastResultService.defineForecastResult(this.forecast, this.game)
        this.actualScore = this.game.goalsHomeTeam + ' : ' + this.game.goalsAwayTeam;
      }else {
        this.actualScore = 'Матч не закончился';
      }
      
    });
  }

}
