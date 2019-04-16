import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router,
    private _autService: AuthService,
  ) {
  }

  public ngOnInit(): void {
  }

  public onLoadServer(id: number): void {
// tslint:disable-next-line: no-floating-promises
    this._router.navigate(
      [
        '/servers',
        id,
        'edit',
      ],
      {
        queryParams: {
          allowEdit: 1,
        },
        fragment: 'loading',
      });
  }

  public onLogin(): void {
    this._autService.login();
  }

  public onLogout(): void {
    this._autService.logout();
  }

}
