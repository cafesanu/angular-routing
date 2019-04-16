import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';

import { ICanComponentDeactivate } from '../../interfaces/can-component-deactivate.interface';

// tslint:disable-next-line: no-unsafe-any
@Injectable({
  providedIn: 'root',
})
export class CanDeactivateAuthGuardService implements CanDeactivate<ICanComponentDeactivate> {
  constructor() {
  }

  public canDeactivate(
    component: ICanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot, // tslint:disable-line no-unused
    currentState: RouterStateSnapshot, // tslint:disable-line no-unused
    nextState?: RouterStateSnapshot, // tslint:disable-line no-unused
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
