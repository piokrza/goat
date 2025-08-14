import { Routes } from '@angular/router';

export const Web3Routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('#web3/page/example')).ExampleComponent,
  },
];
