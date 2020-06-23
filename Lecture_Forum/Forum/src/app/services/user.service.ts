import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userID: number;
  username: string;
  password: string;
  isLoggedIn: boolean;
  logginChange: Subject<User> = new Subject<User>();
  constructor() {}
  doLogin(username: string, password: string, userID: number): void {
    let user = new User();
    user.username = username;
    user.password = password;
    user.userID = userID;
    this.username = username;
    this.password = password;
    this.userID = userID;
    this.isLoggedIn = true;
    this.logginChange.next(user);
  }
}
