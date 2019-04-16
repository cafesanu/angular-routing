import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';

// tslint:disable-next-line: no-unsafe-any
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {
  }

  public canActivate(
    route: ActivatedRouteSnapshot, // tslint:disable-line: no-unused
    state: RouterStateSnapshot, // tslint:disable-line: no-unused
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this._authService.isAuthenticated()
      .then(
        (isAuthenticated: boolean) => {
          if (isAuthenticated) {
            return true;
          } else {
            // tslint:disable-next-line: no-floating-promises
            this._router.navigate(['/']);

            return false;
          }
        },
      );
  }

  public canActivateChild(
    route: ActivatedRouteSnapshot, // tslint:disable-line: no-unused
    state: RouterStateSnapshot, // tslint:disable-line: no-unused
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
