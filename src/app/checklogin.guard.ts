import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate, CanActivateChild, CanLoad {
  currentUser:any;
  constructor( private _router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (sessionStorage.getItem('userInfo')) {
        this.currentUser = JSON.parse(sessionStorage.getItem('userInfo'));
        return true;
      }
      else {
        alert("you have not loggin, kindly login to view orders")
        this._router.navigateByUrl('/');
        return false;
     
      }
   
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
