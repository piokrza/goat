import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable, tap } from 'rxjs';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { Contact } from '#forms/model';
import { EditContactStore } from '#forms/state';

@Injectable({ providedIn: 'root' })
export class EditContactService {
  readonly #router = inject(Router);
  readonly #firebaseApi = inject(FirebaseApi);
  readonly #editContactStore = inject(EditContactStore);

  readonly state = this.#editContactStore.state;

  editContact$(contact: Contact): Observable<void> {
    this.#editContactStore.update('isProcessing', true);

    return this.#firebaseApi.updateDocument$('contact', contact.id, contact).pipe(
      tap(() => {
        this.#router.navigate([Path.FORMS]);
      }),
      finalize(() => this.#editContactStore.update('isProcessing', false))
    );
  }
}
