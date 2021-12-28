import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {AUTH_FAIL_MSG, EMPTY_STRING, SUCESS} from '../model/constants';
import {Router} from '@angular/router';
import {UserAuthService} from '../user-auth.service';
import {AuthResponseData} from '../model/auth-response-data';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  message: string;
  login: string;
  password: string;

  constructor(private router: Router, private userAuth: UserAuthService) {
    this.message = EMPTY_STRING;
    this.login = EMPTY_STRING;
    this.password = EMPTY_STRING;
  }

  ngOnInit(): void {
  }

  auth(): void{
    const currentUser: User = new User(this.login, this.password);
    this.userAuth.isAuth(currentUser).subscribe((response: AuthResponseData) => {
        if (response.code === SUCESS){
          this.router.navigate(['/accueil']);
        }else{
          this.message = AUTH_FAIL_MSG;
        }
    });
  }
}
