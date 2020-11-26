import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http: HttpClient) { }
  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/api/v1/user/signin", { username: user.username, password: user.password})
  }
  public logout(){

  }
}
