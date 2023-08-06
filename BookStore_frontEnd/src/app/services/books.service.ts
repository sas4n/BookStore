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

  addBook(addBookObj: Book): Observable<Book> {
    addBookObj.id='403c2466-550c-4104-9e6c-016a5fea56ba'
    return this.httpClient.post<Book>(`${this.baseApiUrl}${this.url}`,addBookObj)
  }

  getBook(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseApiUrl}${this.url}/${id}`)
  }

  updateBook(updatedBook: Book, id: string): Observable<Book> {
    return this.httpClient.put<Book>(`${this.baseApiUrl}${this.url}/${id}`, updatedBook)
  }
}
