import { TokenInterceptor } from './interceptor/token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './Components/home/home.component';
import { BookListComponent } from './Components/book-list/book-list/book-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddBookComponent } from './Components/addBook/add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { SingleBookComponent } from './Components/single-book/single-book.component';
import { LoginComponent } from './Components/account/login/login.component';
import { SignupComponent } from './Components/account/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    AddBookComponent,
    SingleBookComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
