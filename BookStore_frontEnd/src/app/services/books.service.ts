import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseApiUrl: string = environment.baseApiUrl
  url: string = 'api/Books'
  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
   return  this.httpClient.get<Book[]>(`${this.baseApiUrl}${this.url}`)
  }
}
