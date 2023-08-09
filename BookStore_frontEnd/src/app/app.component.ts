import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookStore_frontEnd';
  isLoggedIn:boolean = false;
  /**
   *
   */
  constructor(private authService: AuthenticationService, private router: Router, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.isLoggedIn)
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([''])
  }

  toggleMode(): void {
    const {body} = this.document
    if(body.dataset['bsTheme'] === 'light') {
      body.dataset['bsTheme'] = 'dark'
    }else {
      body.dataset['bsTheme'] = 'light'
    }
    
  }
}
