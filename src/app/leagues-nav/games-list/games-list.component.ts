import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ILeagueCard } from 'src/app/model/ileaguecard';
import { FootballApiHttpService } from 'src/app/services/football-api-http.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  @Input() currentLeague: ILeagueCard;
  games: IGame[];

  constructor(private footballAPIService: FootballApiHttpService) { }

  ngOnInit() {
    // this.getGames();
  }

  ngOnChanges(): void {
    if (this.currentLeague){
      this.getGames();      
    }
  }

  private parseGames(games) {
    this.games = games.map(game => {
      const homeTeam = { name: game.homeTeam.team_name, logoLink: game.homeTeam.logo };
      
      const awayTeam = { name: game.awayTeam.team_name, logoLink: game.awayTeam.logo};

      return {homeTeam, awayTeam};
    });
  }

  private getGames() {
    this.footballAPIService.getAllGamesByRoundAndId(this.currentLeague.id, this.currentLeague.round)
      .subscribe( data => this.parseGames(data)
    );
  }

}
