import { AuthenticationGuard } from './guard/authentication.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/account/login/login.component';
import { SignupComponent } from './Components/account/signup/signup.component';
import { AddBookComponent } from './Components/addBook/add-book/add-book.component';
import { HomeComponent } from './Components/home/home.component';
import { SingleBookComponent } from './Components/single-book/single-book.component';

const routes: Routes = [
  {
    path:'', 
    component: LoginComponent
  },
  {
    path: 'signup', 
    component: SignupComponent
  },
  {
    path: 'books',
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  }, 
  {
    path: 'books/add',
    component: AddBookComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'books/book/:id',
    component: SingleBookComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
