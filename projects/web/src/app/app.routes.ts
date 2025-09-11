import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#ui/layout')).LayoutComponent,
    children: [],
  },
  {
    path: 'auth',
    loadComponent: async () => (await import('#auth/page')).AuthComponent,
  },
];
