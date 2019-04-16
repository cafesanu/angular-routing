import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IServer } from '../models/server.model';
import { ServersService } from '../services/servers/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: IServer[] = [];

  constructor(
    private _serversService: ServersService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.servers = this._serversService.getServers();
  }

  public onReload(): void {
    // tslint:disable-next-line: no-floating-promises
    this._router.navigate(
      [
        '.',
      ],
      {
        relativeTo: this._route,
      },
    );
  }
}
