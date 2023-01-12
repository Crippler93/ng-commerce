import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _logged: BehaviorSubject<boolean>;

  constructor() {
    const isLoggedIn = localStorage.getItem('token') ? true: false;
    this._logged = new BehaviorSubject<boolean>(isLoggedIn);
  }

  loggedIn() {
    localStorage.setItem('token', '123');
    this._logged.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this._logged.next(false);
  }

  get logged() {
    return this._logged.asObservable();
  }
}
