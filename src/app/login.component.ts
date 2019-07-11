import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './share/auth.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { User } from './share/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users: User[];
  user: User;

  userName: string = '';
  password: string = '';
  isLogin: boolean = false;
  constructor(private authService: AuthService,  private router: Router, private tosterService: ToastrService) {

  }

  ngOnInit() {
    this.isLogin = (window.sessionStorage.getItem('userLogin') === 'true' ) ? true : false;
    if (this.isLogin) { this.router.navigate(['/dashboard']); }
    this.getUsers();
  }

  getUsers() {
    this.authService.getUsers().subscribe((data) => this.users = data);
  }

  isUser(uName: string, pass: string): boolean {
    const res = this.users.find((u) => (u.userName === uName && u.password === pass) );
    return (res) ? true : false;
  }

  onSubmit(form: NgForm) {
    if (this.isUser(form.value.userName, form.value.password)) {
      this.authService.loginUser();
      this.router.navigate(['/dashboard']);
    } else {
      this.tosterService.error('Username or password not match', 'Authentication Error', {
        positionClass: 'toast-top-center'
      });
    }
  }

}
