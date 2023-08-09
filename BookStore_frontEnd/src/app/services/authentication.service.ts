import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseApiUrl = 'https://localhost:7250/'
  url: string = 'api/Authentication'
  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseApiUrl}${this.url}/login`, user)
  }

  signup(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseApiUrl}${this.url}/register`, user)
  }

  storeToken(token: string):void {
    localStorage.setItem('token', token)
  }

  getToken(): string |null{
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token')
  }

  logout(): void {
    localStorage.removeItem('token')
  }
}
