import { Injectable } from '@angular/core';

type resolveFn = (value?: boolean | PromiseLike<boolean>) => void;

// tslint:disable-next-line: no-unsafe-any
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedIn: boolean = false;

  constructor() {
  }

  public isAuthenticated(): Promise<boolean> {
    return new Promise(
      (resolve: resolveFn): void => {
        setTimeout(
          () => {
            resolve(this.loggedIn);
          },
          800,
        );
      },
    );
  }

  public login(): void {
    this.loggedIn = true;
  }

  public logout(): void {
    this.loggedIn = false;
  }
}
