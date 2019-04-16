import { IServer } from '../../models/server.model';

export class ServersService {
  private _servers: IServer[] = [
    {
      id: 1,
      name: 'ProductionServer',
      status: 'online',
    },
    {
      id: 2,
      name: 'TestServer',
      status: 'offline',
    },
    {
      id: 3,
      name: 'DevServer',
      status: 'offline',
    },
  ];

  public getServers(): IServer[] {
    return this._servers.slice();
  }

  public getServer(id: number): IServer {
    return this._servers.find((s: IServer) => s.id === id);
  }

  public updateServer(id: number, serverInfo: {name: string; status: string}): void {
    const server: IServer | undefined = this._servers.find((s: IServer) => s.id === id);

    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
