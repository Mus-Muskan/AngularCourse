import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouteReuseStrategy, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.auth.isAuthenticated())
      return true;
      else
      this.routeservice.navigate(['/login']);
      return false;
    }

  constructor(private auth:AuthService, private routeservice:Router) { }
}
