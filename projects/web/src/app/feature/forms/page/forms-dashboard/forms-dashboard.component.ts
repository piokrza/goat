import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';

const imports = [MatButtonModule, RouterLink, AsyncPipe, MatDividerModule, MatIconModule, RouterLink, MatTooltipModule];

@Component({
  selector: 'echo-reactive-forms',
  template: `
    <h1>My Contacts</h1>
    <div class="mt-8">
      <button matButton="filled" [routerLink]="[Path.EDIT_CONTACT, 'wdada']">Add Contact</button>

      <div class="grid gap-4 border rounded-xl p-4 mt-8">
        @for (contact of contacts$ | async; track contact.id) {
          <div
            class="flex gap-4 items-center justify-between p-3 rounded-xl cursor-pointer hover:[background-color:var(--mat-divider-color,var(--mat-sys-outline-variant))] transition">
            <div class="flex gap-1">
              <p>{{ contact.firstName }}</p>
              <p>{{ contact.lastName }}</p>
            </div>

            <div class="flex gap-4">
              <button matMiniFab matTooltip="Edit contact" [routerLink]="[Path.EDIT_CONTACT, contact.id]">
                <mat-icon>edit</mat-icon>
              </button>
              <button matMiniFab>
                <mat-icon>delete</mat-icon>
              </button>
            </div>
          </div>

          @if (!$last) {
            <mat-divider />
          }
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class FormsDashboardComponent {
  readonly #firestoreApi = inject(FirebaseApi);

  readonly contacts$ = this.#firestoreApi.collectionData$('contact');

  readonly Path = Path;
}
