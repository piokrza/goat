import { Routes } from '@angular/router';

export const TemplateRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('../component/section-toolbar')).SectionToolbarComponent,
  },
];
