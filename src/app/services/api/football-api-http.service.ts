import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { footballApiConfig } from '../../config/footballApiConf';

interface response {
  api: { fixtures:any }
}

@Injectable({
  providedIn: 'root'
})
export class FootballApiHttpService {
  constructor(private http: HttpClient) { }

  getCurrentLeagueRound(leagueId: number): Observable<[number, string]> {
    return this.http.request<response>(
      'GET',
      `${footballApiConfig.url}/fixtures/rounds/${leagueId}/current`,
      {
        headers: footballApiConfig.headers
      })
      .pipe(map(data => [leagueId, data.api.fixtures[0]]));
  }

  getAllGamesByRoundAndId(id: number, round: string): Observable<any>{
    return this.http.request<response>(
      'GET',
      `${footballApiConfig.url}/fixtures/league/${id}/${round}`,
      {
        headers: footballApiConfig.headers
      }
    )
    .pipe(
      map( data => 
        data.api.fixtures.map(game => game)));
  }

  getGameByFixturesId(gameId: number) {
    return this.http.request<response>(
      'GET',
      `${footballApiConfig.url}/fixtures/id/${gameId}`,
      {
        headers: footballApiConfig.headers
      }
    ).pipe(
      map( data => 
        data.api.fixtures.map(game => game)));
  }
}
