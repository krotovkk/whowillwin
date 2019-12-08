import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IForecast } from '../model/IForecast';

const BASE_URL = `${environment.firebaseConfig.databaseURL}`

interface IForecastDto {
  [id:number]: IForecast
}

@Injectable({
  providedIn: 'root'
})
export class GameForecastHttpService {

  constructor(private http: HttpClient) { }

  addForecast(forecast: IForecast){
    this.http.put(`${BASE_URL}/forecast/${forecast.gameId}.json`, forecast).subscribe(data=>console.log(data));
  }

  getForecasts() {
    return this.http.get<IForecastDto>(`${ BASE_URL }/forecast.json`)
  }
}
