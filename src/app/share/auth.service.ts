import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './class/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login =  window.sessionStorage.getItem('userLogin');


  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  // get user from json server
  getUsers():Observable<User[]> {
    // for single user check
    // http://localhost:3000/users?userName=admin&password=admin
    return this.http.get<User[]>(this.url);
  }

  isUserLogin() {
    this.login =  window.sessionStorage.getItem('userLogin');
    return (this.login) ? true : false;
  }

  loginUser() {
    window.sessionStorage.setItem('userLogin', 'true');
  }

  logOutUser() {
    window.sessionStorage.setItem('userLogin', '');
  }
}
