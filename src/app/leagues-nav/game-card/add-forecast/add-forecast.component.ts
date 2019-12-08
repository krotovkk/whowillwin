import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGame } from 'src/app/model/igame';

@Component({
  selector: 'app-add-forecast',
  templateUrl: './add-forecast.component.html',
  styleUrls: ['./add-forecast.component.css']
})
export class AddForecastComponent implements OnInit {
  @Input() game: IGame;

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form= this.formBuilder.group({
      goalsHomeTeam: ['', Validators.required],
      goalsAwayTeam: ['', Validators.required]
    });
    console.log(this.game)
  }

}
