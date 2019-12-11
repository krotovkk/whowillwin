import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGame } from 'src/app/model/igame';
import { GameForecastHttpService } from 'src/app/services/forecasts/game-forecast-http.service';
import { IForecast } from 'src/app/model/IForecast';

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
    private gameForecastHttpService: GameForecastHttpService
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
  }

}