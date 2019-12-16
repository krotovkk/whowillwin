import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IForecast, IForecastDto } from '../../model/IForecast';
import { Observable } from 'rxjs';
import { filter, take, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';

const BASE_URL = `${environment.firebaseConfig.databaseURL}`

@Injectable({
  providedIn: 'root'
})
export class GameForecastHttpService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private db: AngularFireDatabase,
  ) { }

  addForecast(forecast: IForecast): Observable<void> {
    return this.authService.user$.pipe(
      filter(user => !!user),
      take(1),
      map(({ uid }) => this.db.object(`users/${uid}/forecasts/${forecast.game.gameId}`)),
      switchMap(obj =>
        obj.set(forecast),
      ),
    );
  }

  getForecasts() {
    return this.authService.user$.pipe(
      filter(user => !!user),
      take(1),
      switchMap(({ uid }) =>
        this.db.list<IForecast>(`users/${uid}/forecasts`).snapshotChanges(),
      ),
      map(snapshots =>
        snapshots.map(({ key, payload }) => ({ [key]: payload.val() })),
      ),
    )
  }
}
