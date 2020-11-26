import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../model/user';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  user = new User();
  msg = '';
  

  constructor(private tokenService: TokenStorageService, private _service: LoginService, private _router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
    }
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        this.tokenService.saveToken(data.jwttoken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this._router.navigate(['/products']);
      },
      error => {
        this.isLoginFailed = true;
        this.msg = "Bad credentials, please enter valid Email and Password";
      }
    );
  }

  gotoregistration(){
    this._router.navigate(['/registration']);
  }
}
