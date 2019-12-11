import { Injectable } from '@angular/core';
import { ILeagueCard } from 'src/app/model/ileaguecard';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  constructor() { }
  getLeagues(): ILeagueCard[] {
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
