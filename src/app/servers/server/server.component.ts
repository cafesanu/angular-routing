import { Subscription } from 'rxjs/Subscription';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { IServer } from '../../models/server.model';
import { ServersService } from '../../services/servers/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit, OnDestroy {
  public server: IServer;
  private _paramsSubscriber: Subscription;

  constructor(
    private _serversService: ServersService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
    this._route.data
      .subscribe((data: Data) => {
        this.server = <IServer> data.server;
      });
    // const serverId: number = Number(this._route.snapshot.params['id']);

    // this.server = this._serversService.getServer(serverId);
    // this._paramsSubscriber = this._route.params.subscribe((params: Params) => {
    //   this.server = this._serversService.getServer(Number(params['id']));
    // });
  }

  public ngOnDestroy(): void {
    this._paramsSubscriber.unsubscribe();
  }

  public onEdit(): void {
// tslint:disable-next-line: no-floating-promises
    this._router.navigate(['edit'], {
      relativeTo: this._route,
      queryParamsHandling: 'preserve',
    });
  }
}
