import { Injectable } from '@angular/core';

import { IUser } from '../../models/user.model';

// tslint:disable-next-line: no-unsafe-any
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: IUser[] = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];

  constructor() {}

  public getUsers(): IUser[] {
    return this._users.slice();
  }

  public getUser(id: number): IUser {
    return this._users.find((user: IUser) => user.id === id);
  }
}
