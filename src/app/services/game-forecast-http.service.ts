import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IForecast, IForecastDto } from '../model/IForecast';
import { Observable } from 'rxjs';

const BASE_URL = `${environment.firebaseConfig.databaseURL}`

@Injectable({
  providedIn: 'root'
})
export class GameForecastHttpService {

  constructor(private http: HttpClient) { }

  addForecast(forecast: IForecast): Observable<IForecast> {
    return this.http.put<IForecast>(`${BASE_URL}/forecast/${forecast.gameId}.json`, forecast);
  }

  getForecasts() {
    return this.http.get<IForecastDto>(`${ BASE_URL }/forecast.json`)
  }
}
