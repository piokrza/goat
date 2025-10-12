import { Routes } from '@angular/router';

import { Path } from '#common/enum';
import { setPath } from '#common/util';

export const FormsRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#forms/page/forms-dashboard')).FormsDashboardComponent,
  },
  {
    path: Path.ADD_CONTACT,
    loadComponent: async () => (await import('#forms/component/contact-form')).ContactFormComponent,
  },
  {
    path: setPath(Path.EDIT_CONTACT, ':id'),
    loadComponent: async () => (await import('#forms/component/contact-form')).ContactFormComponent,
  },
];
