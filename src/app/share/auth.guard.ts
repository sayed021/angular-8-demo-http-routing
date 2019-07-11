import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate  {

  isuserLogin: boolean = false;

  constructor(private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.isuserLogin = (window.sessionStorage.getItem('userLogin') === 'true') ? true : false;

    if (this.isuserLogin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
