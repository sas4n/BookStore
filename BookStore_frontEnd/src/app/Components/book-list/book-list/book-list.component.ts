import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private booksService: BooksService, private router: Router) {}


  ngOnInit(): void {
    this.booksService.getAllBooks()
      .subscribe({
        next: (books) => {this.books = books},
        error: (err) => console.log(err.message)
      })
  }

  deleteBook(id: string): void {
    console.log(id)
    this.booksService.deleteBook(id).subscribe({
      next: (books) => {
        this.books = this.books.filter(book => book.id !== id)
      }
    })
  }
  
   

}
