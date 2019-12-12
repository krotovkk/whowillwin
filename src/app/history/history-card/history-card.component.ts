import { Component, OnInit, Input } from '@angular/core';
import { IForecast } from 'src/app/model/IForecast';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.css']
})
export class HistoryCardComponent implements OnInit {
  @Input() forecast: IForecast;
  actualScore: string;
  forecastScore: string;

  constructor() { }

  ngOnInit() {
    this.forecastScore = this.forecast.goalsHomeTeam + ' : ' + this.forecast.goalsAwayTeam;
    this.actualScore = this.forecast.game.gameStatus === "Match Finished" ? 
      this.forecast.game.goalsHomeTeam + ' : ' + this.forecast.game.goalsAwayTeam :
      'Матч не закончился' 
  }

}
