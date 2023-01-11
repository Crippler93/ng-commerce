import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalhostService {

  constructor() { }

  loginSuccess() {
    localStorage.setItem('login', 'true');
  }

  logout() {
    localStorage.removeItem('login');
  }
}
