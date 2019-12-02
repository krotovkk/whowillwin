import { Component, OnInit } from '@angular/core';

import { ILeagueCard } from "../model/ileaguecard";

@Component({
  selector: 'app-leagues-nav',
  templateUrl: './leagues-nav.component.html',
  styleUrls: ['./leagues-nav.component.css']
})
export class LeaguesNavComponent implements OnInit {

  leagues: ILeagueCard[];
  currentLeague: ILeagueCard;

  constructor() { }

  ngOnInit() {
    this.leagues = this.getLeagues();    
  }

  onChange(val: string) {
    this.currentLeague = this.leagues.filter(league => league.value === val)[0];
    this.getCurrentLeagueRound(this.currentLeague.id);
  }

  private async getCurrentLeagueRound(leagueId: number) {
    const data = await fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/${leagueId}/current`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "6b329fe810msh8c2e124ed165b44p129ec0jsn4c1f4247bc48"
      }
    }).then(response => response.json());
    this.currentLeague.round = data.api.fixtures[0];
    console.log("TCL: LeaguesNavComponent -> constructor -> currentLeague", this.currentLeague)
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
