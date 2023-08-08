import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  /**
   *
   */
  constructor(private router: Router, private auth: AuthenticationService) {}

  canActivate(): boolean{
    if(this.auth.isLoggedIn()){
      return true;
    }
    else{
      alert('Please login')
      this.router.navigate(['']);
      return false;
    }
    
  }
  
}
