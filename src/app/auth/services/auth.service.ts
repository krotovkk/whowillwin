import { Injectable } from '@angular/core';

import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

  private _user$ = new BehaviorSubject<IUser>(null);

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState
      .pipe(
        map(fullUser => {
          if (fullUser) {
            return { uid: fullUser.uid, email: fullUser.email };
          }

          return null;
        }),
      )
      .subscribe(user => {
        this._user$.next(user);

        if (this.redirectUrl) {
            this.router.navigate([this.redirectUrl]);
            this.redirectUrl = '';
        }
    });
  }

  get user$(): Observable<IUser> {
    return this._user$.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getReirectUrl() {
    if(!this.redirectUrl) {
      return '';
    }
    return this.redirectUrl;
  }
}