import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  /**
   *
   */
  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router) {}

  responseBook: Book = {
    id: '',
    title: '',
    author: '',
    publicationDate: ''
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.bookService.getBook(id).subscribe({
            next: (book) => this.responseBook=book,
            error: (err) => console.log(err.message)
          })
        }
      }
    })
  }

  updateBook(): void {
    console.log(this.responseBook.publicationDate)
    this.bookService.updateBook(this.responseBook, this.responseBook.id).subscribe({
      next:() => this.router.navigate(['books'])
    })
  }

}
