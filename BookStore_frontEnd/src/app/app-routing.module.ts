import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/addBook/add-book/add-book.component';
import { HomeComponent } from './Components/home/home.component';
import { SingleBookComponent } from './Components/single-book/single-book.component';

const routes: Routes = [
  {
    path: 'books',
    component: HomeComponent,
  }, 
  {
    path: 'books/add',
    component: AddBookComponent,
  },
  {
    path: 'books/book/:id',
    component: SingleBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
