import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ILeagueCard } from "../model/ileaguecard";
import { FootballApiHttpService } from '../services/api/football-api-http.service';
import { LeaguesService } from '../services/leagues/leagues.service';
import { GameForecastHttpService } from '../services/forecasts/game-forecast-http.service';
import { ForecastLocalService } from '../services/forecasts/forecast-local.service';

@Component({
  selector: 'app-leagues-nav',
  templateUrl: './leagues-nav.component.html',
  styleUrls: ['./leagues-nav.component.css']
})
export class LeaguesNavComponent implements OnInit {
  leagues: ILeagueCard[];
  
  constructor( 
    private leaguesService: LeaguesService,
    private forecastLocalService: ForecastLocalService,
    private gameForecastHttpService: GameForecastHttpService,
  ) { }

  ngOnInit() {
    this.leagues = this.leaguesService.getLeagues();
    this.gameForecastHttpService.getForecasts().subscribe(data =>
      this.forecastLocalService.setForecasts(data)
    )
  }

}
