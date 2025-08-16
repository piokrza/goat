import { Routes } from '@angular/router';

export const TemplateRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#template/component/section-toolbar')).SectionToolbarComponent,
  },
];
