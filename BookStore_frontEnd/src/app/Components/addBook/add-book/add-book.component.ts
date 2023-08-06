import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  /**
   *
   */
  constructor(private bookService: BooksService, private router: Router) {
    
  }
addBookObj:Book={
  id:'',
  title:'',
  author:'',
  publicationDate:''
}
addBook():void {
  this.bookService.addBook(this.addBookObj)
    .subscribe({
      next:() => this.router.navigate(['home']),
      error:(error) => console.log(error.message)
    })
}
}
