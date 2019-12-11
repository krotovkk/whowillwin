import { Component, OnInit, Input } from '@angular/core';
import { IGame } from 'src/app/model/igame';
import { ILeagueCard } from 'src/app/model/ileaguecard';
import { FootballApiHttpService } from 'src/app/services/api/football-api-http.service';
import { GameLocalDataService } from 'src/app/services/game/game-local-data.service';
import { GameForecastHttpService } from 'src/app/services/forecasts/game-forecast-http.service';
import { ForecastLocalService } from 'src/app/services/forecasts/forecast-local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { LeaguesService } from 'src/app/services/leagues/leagues.service';

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
    private forecastLocalService: ForecastLocalService,
    private route: ActivatedRoute,
    private router: Router,
    private leagueService: LeaguesService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(param => this.leagueService.getLeagueId(param.get('country'))),
      switchMap(id => this.footballAPIService.getCurrentLeagueRound(id)),
      switchMap(([id, round]) => this.footballAPIService.getAllGamesByRoundAndId(id, round))
    )
      .subscribe(data => {
        this.gameLocalDataService.setRoundGames(data),
        this.games = this.gameLocalDataService.getRoundGames()      }
    )
  }

}
