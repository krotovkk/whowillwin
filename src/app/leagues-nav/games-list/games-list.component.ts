import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ILeagueCard } from 'src/app/model/ileaguecard';
import { FootballApiHttpService } from 'src/app/services/football-api-http.service';
import { GameLocalDataService } from 'src/app/services/game-local-data.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  @Input() currentLeague: ILeagueCard;
  games: IGame[];

  constructor(
    private footballAPIService: FootballApiHttpService,
    private gameLocalDataService: GameLocalDataService
  ) { }

  ngOnInit() {
    // this.getGames();
  }

  ngOnChanges(): void {
    if (this.currentLeague){
      this.getGames();      
    }
  }

  private parseGames( ) {
    this.games = this.gameLocalDataService.getRoundGames()
  }

  private getGames() {
    this.footballAPIService.getAllGamesByRoundAndId(this.currentLeague.id, this.currentLeague.round)
      .subscribe( data => {
        this.gameLocalDataService.setRoundGames(data),
        this.parseGames()
      }
    );
  }

}
