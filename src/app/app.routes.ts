import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#ui/component/layout')).LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('#template/route')).TemplateRoutes,
      },
    ],
  },
];
