import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGame } from 'src/app/model/igame';
import { GameForecastHttpService } from 'src/app/services/game-forecast-http.service';

@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
export class AddForecastComponent implements OnInit {
  @Input() game: IGame;
  goalsHomeTeam;
  goalsAwayTeam;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private gameForecastHttpService: GameForecastHttpService  
  ) { }

  ngOnInit() {
    this.form= this.formBuilder.group({
      goalsHomeTeam: [this.goalsHomeTeam ? this.goalsHomeTeam : '', Validators.required],
      goalsAwayTeam: [this.goalsAwayTeam ? this.goalsAwayTeam : '', Validators.required]
    });
  }

  onSubmit() {
    this.gameForecastHttpService.addForecast({
      gameId: this.game.gameId,
      goalsHomeTeam: this.form.value.goalsHomeTeam,
      goalsAwayTeam: this.form.value.goalsAwayTeam
    })
  }

}
