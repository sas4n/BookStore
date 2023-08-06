import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books : Book[] = []

  /**
   *
   */
  constructor(private booksService: BooksService) {}


  ngOnInit(): void {
    this.booksService.getAllBooks()
      .subscribe({
        next: (books) => {this.books = books},
        error: (err) => console.log(err.message)
      })
  }
  
   

}
