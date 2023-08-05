import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  books : Book[] = [
   /* {
      id:'jhg',
      title: 'naruto',
      author: 'sasan',
      publicationDate: new Date('2000-09-18').toLocaleDateString()
    },
    {
      id:'jg',
      title: 'naruuuuto',
      author: 'saaaasan',
      publicationDate: new Date('2010-09-18').toLocaleDateString()
    }*/
  ]

}
