import { Subscription } from 'rxjs/Subscription';
import { UserService } from 'src/app/services/user/user.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public user: IUser;
  private _paramsSubscriber: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) { }

  public ngOnInit(): void {
    this.user = this._userService.getUser(Number(this._route.snapshot.params['id']));

    this._paramsSubscriber = this._route.params.subscribe((params: Params) => {
      this.user = this._userService.getUser(Number(params['id']));
    });
  }

  public ngOnDestroy(): void {
    this._paramsSubscriber.unsubscribe();
  }
}
