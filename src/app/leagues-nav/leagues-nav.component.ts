import { Component, OnInit } from '@angular/core';

import { ILeagueCard } from "../model/ileaguecard";

@Component({
  selector: 'app-leagues-nav',
  templateUrl: './leagues-nav.component.html',
  styleUrls: ['./leagues-nav.component.css']
})
export class LeaguesNavComponent implements OnInit {

  leagues: ILeagueCard[]

  constructor() { }

  ngOnInit() {
    this.leagues = this.getLeagues();
  }

  private getLeagues(): ILeagueCard[] {
    return [
      {
        name: 'Англия',
        value: 'england',
        logoLink: 'https://media.api-football.com/leagues/2.png'
      },
      {
        name: 'Германия',
        value: 'germany',
        logoLink: 'https://media.api-football.com/leagues/8.png'
      },
      {
        name: 'Испания',
        value: 'spain',
        logoLink: 'https://media.api-football.com/leagues/87.png'
      },
      {
        name: 'Италия',
        value: 'italy',
        logoLink: 'https://media.api-football.com/leagues/94.png'
      },
      {
        name: 'Франция',
        value: 'france',
        logoLink: 'https://media.api-football.com/leagues/4.svg'
      },
      {
        name: 'Россия',
        value: 'russia',
        logoLink: 'https://media.api-football.com/leagues/135.png'
      },
    ]
  }

}
