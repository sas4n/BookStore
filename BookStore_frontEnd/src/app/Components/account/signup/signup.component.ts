import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: User = {
    username: '',
    password: ''
  }

  /**
   *
   */
  constructor(private authService: AuthenticationService, private router: Router) {}


  signup():void {
    this.authService.signup(this.user)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate([''])
        }
      })
  }
}
