import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable, tap } from 'rxjs';

import { Store } from '#common/abstract';
import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { Contact } from '#forms/model';

@Injectable({ providedIn: 'root' })
export class EditContactService extends Store<{ isProcessing: boolean }> {
  constructor() {
    super({ isProcessing: false });
  }

  readonly #router = inject(Router);
  readonly #firebaseApi = inject(FirebaseApi);

  editContact$(contact: Contact): Observable<void> {
    this.update('isProcessing', true);

    return this.#firebaseApi.updateDocument$('contact', contact.id, contact).pipe(
      tap(() => {
        this.#router.navigate([Path.FORMS]);
      }),
      finalize(() => this.update('isProcessing', false))
    );
  }
}
