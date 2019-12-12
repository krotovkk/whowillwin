import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGame } from 'src/app/model/igame';
import { GameForecastHttpService } from 'src/app/services/forecasts/game-forecast-http.service';
import { IForecast } from 'src/app/model/IForecast';
import { AuthService } from 'src/app/auth/services/auth.service';
import { filter, take, map, switchMap } from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
export class AddForecastComponent implements OnInit {
  @Input() game: IGame;
  @Input() forecast: IForecast;
  @Output() onForecastChange = new EventEmitter<IForecast>();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gameForecastHttpService: GameForecastHttpService,
    private authService: AuthService,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit() {
    const goalsHomeTeamValue = this.forecast ? this.forecast.goalsHomeTeam : '';
    const goalsAwayTeamValue = this.forecast ? this.forecast.goalsAwayTeam : '';

    this.form = this.formBuilder.group({
      goalsHomeTeam: [goalsHomeTeamValue, Validators.required],
      goalsAwayTeam: [goalsAwayTeamValue, Validators.required]
    });
  }

  onSubmit() {
    this.forecast = {
      gameId: this.game.gameId,
      goalsHomeTeam: this.form.value.goalsHomeTeam,
      goalsAwayTeam: this.form.value.goalsAwayTeam
    }

    this.gameForecastHttpService.addForecast(this.forecast).subscribe( forecast =>
      this.onForecastChange.emit(forecast)
    );
    this.authService.user$.pipe(
      filter(user => !!user),
      take(1),
      map(({uid}) => this.db.object(`users/${uid}/wallets/new`)),
      switchMap(obj =>
          obj.set({
              name: 'Новый кошелек',
              amount: 10000,
          }),
      ),
    ).subscribe(console.log)
  }

}