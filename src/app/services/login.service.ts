import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'http://localhost:8080/api/v1/user/signin';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http: HttpClient, private _tokenService:TokenStorageService) { }
  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>(AUTH_API, { username: user.username, password: user.password}, httpOptions);
  }
  public logout(){
    this._tokenService.signOut();
  }
}
