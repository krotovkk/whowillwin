import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase) { }

  getItems() {
    return this.db.list('users')
      .snapshotChanges()
      .pipe(map((users: any[]) => users.map(user => ({ id: user.key, ...user.payload.val().info }))));
  }
}