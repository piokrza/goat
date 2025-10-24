import { DestroyRef, inject, Injectable, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { Contact, FormsDashboardState } from '#forms/model';
import { FormsDashboardStore } from '#forms/state';
import { ConfirmDialogService } from '#ui/service';

@Injectable({ providedIn: 'root' })
export class FormsDashboardService {
  readonly #router = inject(Router);
  readonly #destroyRef = inject(DestroyRef);
  readonly #firestoreApi = inject(FirebaseApi);
  readonly #confirmDialog = inject(ConfirmDialogService);
  readonly #formsDashboardStore = inject(FormsDashboardStore);

  readonly state: Signal<FormsDashboardState> = this.#formsDashboardStore.state;

  readonly Path = Path;

  removeContact$({ id, firstName, lastName }: Contact): Observable<void> {
    return this.#confirmDialog.open$({ title: `Are you sure you want to delete ${[firstName, lastName].join(' ')} contact?` }).pipe(
      switchMap(() => this.#firestoreApi.removeDocument$('contact', id)),
      tap(() => this.#router.navigate([Path.FORMS])),
      takeUntilDestroyed(this.#destroyRef)
    );
  }

  loadContacts$(): Observable<Contact[]> {
    this.#formsDashboardStore.update('isLoading', true);

    return this.#firestoreApi.collectionData$('contact').pipe(
      tap({
        next: (contacts) => {
          this.#formsDashboardStore.update('contacts', contacts);
          this.#formsDashboardStore.update('isLoading', false);
        },
        error: () => this.#formsDashboardStore.update('isLoading', false),
      })
    );
  }
}
