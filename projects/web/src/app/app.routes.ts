import { redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AuthGuard } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

import { Path } from '#common/enum';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#ui/layout')).LayoutComponent,
    canActivate: [AuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo([Path.AUTH]) },
    children: [
      {
        path: '',
        title: 'ng-template',
        loadChildren: async () => (await import('#template/route')).TemplateRoutes,
      },
    ],
  },
  {
    path: Path.AUTH,
    canActivate: [AuthGuard],
    title: 'authentication',
    data: { authGuardPipe: () => redirectLoggedInTo(['/']) },
    loadComponent: async () => (await import('#auth/page')).AuthComponent,
  },
];
