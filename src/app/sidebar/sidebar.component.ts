import { Component, OnInit } from '@angular/core';
import { ForecastLocalService } from '../services/forecasts/forecast-local.service';
import { GameForecastHttpService } from '../services/forecasts/game-forecast-http.service';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private forecastLocalService: ForecastLocalService,
    private gameForecastHttpService: GameForecastHttpService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.gameForecastHttpService.getForecasts().subscribe(data =>
      this.forecastLocalService.setForecasts(data)
    )  
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
