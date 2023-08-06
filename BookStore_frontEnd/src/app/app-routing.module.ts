import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/addBook/add-book/add-book.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  }, 
  {
    path: 'add-book',
    component: AddBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
