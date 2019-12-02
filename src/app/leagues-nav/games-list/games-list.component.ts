import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ILeagueCard } from 'src/app/model/ileaguecard';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  @Input() currentLeague: ILeagueCard;
  games: IGame[];
  // league_id = 775;
  // round = 'Regular_Season_-_16';

  constructor() { }

  ngOnInit() {
    this.getGames();
  }

  ngOnChanges(): void {
    this.getGames();
  }

  private parseGames() {
    const games = JSON.parse(localStorage['spain-fixtures-test']).api.fixtures;
    console.log(games);
    this.games = games.map(game => {
      const homeTeam = { name: game.homeTeam.team_name, logoLink: game.homeTeam.logo };
      
      const awayTeam = { name: game.awayTeam.team_name, logoLink: game.awayTeam.logo};

      return {homeTeam, awayTeam};
    });
  }

  private async getGames() {
    if( this.currentLeague) {
      console.log('assladl');
      
      const data = await fetch(`https://api-football-v1.p.rapidapi.com/v2/fixtures/league/${this.currentLeague.id}/${this.currentLeague.round}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "6b329fe810msh8c2e124ed165b44p129ec0jsn4c1f4247bc48"
        }
      }).then(r => r.json(), err => console.error(err));
      console.log(this.currentLeague.id, this.currentLeague.round[0]);
      console.log(data);
      
      localStorage.setItem('spain-fixtures-test', JSON.stringify(data));
      this.parseGames();
    }    
  }

}
