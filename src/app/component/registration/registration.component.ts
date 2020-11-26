import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = "";

  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  createUser(){
    this._userService.addUser(this.user).subscribe(
      data => {
        console.log(data);
        this.msg = "Đăng ký thành công";
        this._router.navigate(['/']);
      },
      error => {
        this.msg = "Unable to register a new account";
      }
    )
  }
}
