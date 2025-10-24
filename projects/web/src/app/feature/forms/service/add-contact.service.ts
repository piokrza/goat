import { inject, Injectable } from '@angular/core';
import { DocumentReference, DocumentData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { finalize, Observable, tap } from 'rxjs';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { Contact } from '#forms/model';
import { AddContactStore } from '#forms/state';

@Injectable({ providedIn: 'root' })
export class AddContactService {
  readonly #router = inject(Router);
  readonly #firebaseApi = inject(FirebaseApi);
  readonly #addContactStore = inject(AddContactStore);

  readonly state = this.#addContactStore.state;

  addContact$(contactData: Contact): Observable<DocumentReference<DocumentData, DocumentData>> {
    this.#addContactStore.update('isProcessing', true);

    return this.#firebaseApi.addDocument$('contact', contactData).pipe(
      tap(() => {
        this.#router.navigate([Path.FORMS]);
      }),
      finalize(() => this.#addContactStore.update('isProcessing', false))
    );
  }
}
