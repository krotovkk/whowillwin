import { Component, OnInit } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ITeam } from 'src/app/model/iteam';

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

  private parseGames() {
    const games = JSON.parse(localStorage['spain-fixtures-test']).api.fixtures;
    this.games = games.map(game => {
      const homeTeam = { name: game.homeTeam.team_name, logoLink: game.homeTeam.logo };
      
      const awayTeam = { name: game.awayTeam.team_name, logoLink: game.awayTeam.logo};

      return {homeTeam, awayTeam};
    });
    
    console.log(this.games);
    
    
  }

  private async getGames() {
    // const data = await fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${this.league_id}/${this.round}`, {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //     "x-rapidapi-key": "6b329fe810msh8c2e124ed165b44p129ec0jsn4c1f4247bc48"
    //   }
    // }).then(r => r.json());
    // localStorage.setItem('spain-fixtures-test', JSON.stringify(data));
    this.parseGames();    
  }

}
