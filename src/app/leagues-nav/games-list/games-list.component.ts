import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/model/igame';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: IGame[];
  league_id = 775;
  round = 'Regular_Season_-_16';

  constructor() { }

  ngOnInit() {
    this.getGames();
  }

  private async getGames() {
    const data = await fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/775/Regular_Season_-_16", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "6b329fe810msh8c2e124ed165b44p129ec0jsn4c1f4247bc48"
      }
    }).then(r => r.json());
    console.log(data);
    
  }

}
