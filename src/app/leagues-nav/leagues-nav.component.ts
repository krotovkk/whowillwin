import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ILeagueCard } from "../model/ileaguecard";
import { FootballApiHttpService } from '../services/football-api-http.service';

@Component({
  selector: 'app-leagues-nav',
  templateUrl: './leagues-nav.component.html',
  styleUrls: ['./leagues-nav.component.css']
})
export class LeaguesNavComponent implements OnInit {
  @Output() menuClick = new EventEmitter;

  leagues: ILeagueCard[];
  currentLeague: ILeagueCard;

  constructor( private footballAPIService: FootballApiHttpService ) { }

  ngOnInit() {
    this.leagues = this.getLeagues();    
  }

  onChange(val: string) {
    const currentLeague = this.leagues.filter(league => league.value === val)[0];
    this.getCurrentLeagueRound(currentLeague);
  }

  onMenuButton() {
    this.menuClick.emit();
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

  private getLeagues(): ILeagueCard[] {
    return [
      {
        name: 'Англия',
        value: 'england',
        logoLink: 'https://media.api-football.com/leagues/2.png',
        id: 524
      },
      {
        name: 'Германия',
        value: 'germany',
        logoLink: 'https://media.api-football.com/leagues/8.png',
        id: 754
      },
      {
        name: 'Испания',
        value: 'spain',
        logoLink: 'https://media.api-football.com/leagues/87.png',
        id: 775
      },
      {
        name: 'Италия',
        value: 'italy',
        logoLink: 'https://media.api-football.com/leagues/94.png',
        id: 869
      },
      {
        name: 'Франция',
        value: 'france',
        logoLink: 'https://media.api-football.com/leagues/4.svg',
        id: 525
      },
      {
        name: 'Россия',
        value: 'russia',
        logoLink: 'https://media.api-football.com/leagues/135.png',
        id: 511
      },
    ]
  }

}
