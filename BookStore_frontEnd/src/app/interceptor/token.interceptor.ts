import { AuthenticationService } from 'src/app/services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getToken();
    console.log(token);
    if (token) {
      request= request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
    }
    console.log(request.headers)
    return next.handle(request);
  }
}
