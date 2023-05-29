import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;

  isAuthenticated(){
    return this.loggedIn;
  }
  constructor() { }
}
