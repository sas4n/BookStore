import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    username: '',
    password: ''
  };
  envelope = faEnvelope

  /**
   *
   */
  constructor(private auth: AuthenticationService, private router: Router) {}

  login():void {
    this.auth.login(this.user)
      .subscribe({
        next:(result:any) => {
         this.auth.storeToken(result.token)
         this.router.navigate(['books'])
        },
        error:(error) => console.log(error)
      })
  }


}
