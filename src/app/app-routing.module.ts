import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { LeaguesNavComponent } from './leagues-nav/leagues-nav.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'',
    component: LeaguesNavComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
