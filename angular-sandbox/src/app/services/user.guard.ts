import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, Resolve
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserDataService } from "../user/services/user-data.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate,
  CanActivateChild,
  CanDeactivate<unknown>,
  CanLoad,
  Resolve<any> {
  constructor(private userDataService: UserDataService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    // console.log('Resolve');
    // return this.userDataService.getUser(route.paramMap.get('id'));
    // return of(true)
    return true
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('CanActivate');
    // return of(true).pipe(delay(4000))
    // return of(true)
    return true
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('CanDeactivate');
    // return of(true).pipe(delay(3000))
    return of(true);
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('CanActivateChild');
    return of(true)
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('CanLoad');
    return of(true)
    // return of(true).pipe(delay(3000))
  }
}
