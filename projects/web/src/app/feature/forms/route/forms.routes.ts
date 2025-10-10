import { Routes } from '@angular/router';

export const FormsRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#forms/page/edit-contact')).EditContactComponent,
  },
  // {
  //   path: '',
  //   loadComponent: async () => (await import('#forms/page/reactive-forms')).ReactiveFormsComponent,
  // },
];
