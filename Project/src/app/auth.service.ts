import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=true;

  isAuthenticated(){
    return this.loggedIn;
  }
  constructor() { }
}
