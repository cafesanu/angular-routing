import { Observable } from 'rxjs';
import { IServer } from 'src/app/models/server.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ICanComponentDeactivate } from '../../interfaces/can-component-deactivate.interface';
import { ServersService } from '../../services/servers/servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, ICanComponentDeactivate {
  public server: IServer;
  public serverName: string = '';
  public serverStatus: string = '';
  public allowEdit: boolean;
  public changesSaved: boolean = false;

  constructor(
    private _serversService: ServersService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
  }

  public ngOnInit(): void {
    const id: number = Number(this._route.snapshot.params.id);

    this.server = this._serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this._route.queryParams.subscribe((params: Params) => this.allowEdit = (<string> params.allowEdit) === 'true');
  }

  public onUpdateServer(): void {
    this._serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    // tslint:disable-next-line: no-floating-promises
    this._router.navigate(
      ['../'], {
        relativeTo: this._route,
      },
    );
  }

  public canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard changes?');
    }

    return true;
  }
}
