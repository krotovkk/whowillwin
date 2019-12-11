import { Injectable } from '@angular/core';

import { Observable, of, from } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;

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
      .subscribe(console.log);
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