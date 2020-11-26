import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  public signIn(user: User){
    return this._http.post<any>(`http://localhost:8080/api/v1/user/signin`,user);
  }
  public getAllUsers(): Observable<User[]> {
    return this._http.get<any>(`http://localhost:8080/api/v1/user/list`);
  }

  public addUser(user: User): Observable<User> {
    return this._http.post<any>(`http://localhost:8080/api/v1/user/add`, user);
  }

  public updateUser(id: number, user: User): Observable<User> {
    return this._http.put<any>(`http://localhost:8080/api/v1/user/update/${id}`, user);
  }

  public getUserbyID(id: number): Observable<User> {
    return this._http.get<User>(`http://localhost:8080/api/v1/user/get/${id}`);
  }
}
