import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';

  constructor(private _service: LoginService, private _router: Router) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log(data);
        this._router.navigate(['/products']);
      },
      error => {
        this.msg = "Bad credentials, please enter valid Email and Password";
      }
    );
  }
  
  gotoregistration(){
    console.log('hello from register');
    this._router.navigate(['/registration']);
  }
}
