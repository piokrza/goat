import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#shared/ui/layout')).LayoutComponent,
    children: [],
  },
];
