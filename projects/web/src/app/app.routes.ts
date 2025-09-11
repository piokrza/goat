import { redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AuthGuard } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

import { Path } from '#common/enum';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: { authGuardPipe: () => redirectUnauthorizedTo([Path.AUTH]) },
    loadComponent: async () => (await import('#ui/layout')).LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: Path.TEMPLATE },
      {
        path: Path.TEMPLATE,
        title: 'ng-template',
        loadChildren: async () => (await import('#template/route')).TemplateRoutes,
      },
      {
        path: Path.FORMS,
        title: 'forms',
        loadChildren: async () => (await import('#forms/route')).FormsRoutes,
      },
    ],
  },
  {
    path: Path.AUTH,
    canActivate: [AuthGuard],
    title: 'authentication',
    data: { authGuardPipe: () => redirectLoggedInTo([Path.TEMPLATE]) },
    loadComponent: async () => (await import('#auth/page')).AuthComponent,
  },
];
