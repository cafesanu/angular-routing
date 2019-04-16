import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { CanDeactivateAuthGuardService } from './services/can-deactivate-auth-guard/can-deactivate-auth-guard.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServerResolverService } from './services/server-resolver/server-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':id',
        component: UserComponent,
      },
    ],
  },
  {
    path: 'servers',
    component: ServersComponent,
    canActivateChild: [
      AuthGuardService,
    ],
    children: [
      {
        path: ':id',
        component: ServerComponent,
        resolve: {
          server: ServerResolverService,
        },
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateAuthGuardService],
      },
    ],
  },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {
      message: 'Page not foundz',
    },
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
