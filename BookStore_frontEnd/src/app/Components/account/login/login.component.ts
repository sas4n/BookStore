import { Component } from '@angular/core';
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
  constructor(private auth: AuthenticationService) {}

  login():void {
    this.auth.login(this.user)
      .subscribe({
        next:(result:any) => {
          console.log(result.token)
         this.auth.storeToken(result.token)
        },
        error:(error) => console.log(error)
      })
  }


}
