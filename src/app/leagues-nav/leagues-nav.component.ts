import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ILeagueCard } from "../model/ileaguecard";
import { FootballApiHttpService } from '../services/api/football-api-http.service';
import { LeaguesService } from '../services/leagues/leagues.service';

@Component({
  selector: 'app-leagues-nav',
  templateUrl: './leagues-nav.component.html',
  styleUrls: ['./leagues-nav.component.css']
})
export class LeaguesNavComponent implements OnInit {
  leagues: ILeagueCard[];
  currentLeague: ILeagueCard;

  constructor( 
    private footballAPIService: FootballApiHttpService,
    private leaguesService: LeaguesService
  ) { }

  ngOnInit() {
    this.leagues = this.leaguesService.getLeagues();    
  }

  private getCurrentLeagueRound(currentLeague: ILeagueCard) {
    this.footballAPIService.getCurrentLeagueRound(currentLeague.id).subscribe(
      round => {
        currentLeague.round = round
        this.setCurrentLeague(currentLeague)
      }
    );
  }

  private setCurrentLeague(currentLeague: ILeagueCard) {
    this.currentLeague = currentLeague;
  }

}
