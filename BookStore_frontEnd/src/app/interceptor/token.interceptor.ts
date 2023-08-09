import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();

    if (token) {
      request= request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
    }
    
    return next.handle(request).pipe(
      catchError((err) =>{
        if(err.status === 401) {
          this.auth.logout()
          this.router.navigate([''])
        }
        return throwError(()=> new Error('some error'))
      })
    );
  }
}
