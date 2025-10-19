import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DocumentReference, DocumentData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { Contact } from '#forms/model';
import { AddContactStore } from '#forms/state';

@Injectable({ providedIn: 'root' })
export class AddContactService {
  readonly #router = inject(Router);
  readonly #destroyRef = inject(DestroyRef);
  readonly #firebaseApi = inject(FirebaseApi);
  readonly #addContactStore = inject(AddContactStore);

  readonly state = this.#addContactStore.state;

  addContact$(contactData: Contact): Observable<DocumentReference<DocumentData, DocumentData>> {
    return this.#firebaseApi.addDocument$('contact', contactData).pipe(
      tap(() => this.#router.navigate([Path.FORMS])),
      takeUntilDestroyed(this.#destroyRef)
    );
  }
}
