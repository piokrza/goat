import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { Contact } from '#forms/model';

const imports = [MatButtonModule, RouterLink, AsyncPipe];

@Component({
  selector: 'echo-reactive-forms',
  template: `
    <h1>My Contacts</h1>
    <div class="mt-8">
      <button matButton="filled" [routerLink]="[Path.EDIT_CONTACT, 'wdada']">Add Contact</button>

      <div class="border rounded-xl p-4 mt-8">
        @for (contact of contacts$ | async; track $index) {
          <p>{{ contact.firstName }}</p>
          <p>{{ contact.lastName }}</p>
        }
      </div>
    </div>
  `,
  imports,
})
export class FormsDashboardComponent {
  readonly #firestoreApi = inject(FirebaseApi);

  readonly contacts$ = this.#firestoreApi.collectionData$<Contact>('contact');

  readonly Path = Path;
}
