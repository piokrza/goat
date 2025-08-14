import { Routes } from '@angular/router';

import { Path } from '#core/enum';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#ui/layout')).LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('#template/route')).TemplateRoutes,
      },
      {
        path: Path.WEB3,
        loadChildren: async () => (await import('#web3/route')).Web3Routes,
      },
    ],
  },
];
