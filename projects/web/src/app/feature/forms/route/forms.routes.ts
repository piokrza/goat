import { Routes } from '@angular/router';

import { Path } from '#common/enum';

export const FormsRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#forms/page/forms-dashboard')).FormsDashboardComponent,
  },
  {
    path: Path.EDIT_CONTACT,
    loadComponent: async () => (await import('#forms/page/edit-contact')).EditContactComponent,
  },
];
