import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseApiUrl: string = environment.baseApiUrl
  url: string = 'api/Authentication'
  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseApiUrl}${this.url}/login`, user)
  }
}