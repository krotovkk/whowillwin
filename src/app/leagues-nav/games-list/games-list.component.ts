import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ILeagueCard } from 'src/app/model/ileaguecard';
import { FootballApiHttpService } from 'src/app/services/api/football-api-http.service';
import { GameLocalDataService } from 'src/app/services/game/game-local-data.service';
import { GameForecastHttpService } from 'src/app/services/forecasts/game-forecast-http.service';
import { ForecastLocalService } from 'src/app/services/forecasts/forecast-local.service';

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
    private gameLocalDataService: GameLocalDataService,
    private gameForecastHttpService: GameForecastHttpService,
    private forecastLocalService: ForecastLocalService
  ) { }

  ngOnInit() {
    this.gameForecastHttpService.getForecasts().subscribe(data => 
      this.forecastLocalService.setForecasts(data)
    )
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
