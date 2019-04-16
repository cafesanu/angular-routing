import { Observable } from 'rxjs/Observable';
import { IServer } from 'src/app/models/server.model';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { ServersService } from '../servers/servers.service';

// tslint:disable-next-line: no-unsafe-any
@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<IServer> {
  constructor(
    private _serverService: ServersService,
  ) { }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot, // tslint:disable-line no-unused
  ): IServer | Observable<IServer> | Promise<IServer> {
    return this._serverService.getServer(Number(route.params.id));
  }
}
