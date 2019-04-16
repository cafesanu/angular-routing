import { Component, OnInit } from '@angular/core';

import { IUser } from '../models/user.model';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: IUser[];

  constructor(
    private _userService: UserService,
  ) {
  }

  public ngOnInit(): void {
    this.users = this._userService.getUsers();
  }
}
