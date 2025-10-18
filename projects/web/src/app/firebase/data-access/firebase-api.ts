import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, DocumentData, DocumentReference, Firestore, query, where } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

import { CollectionName } from '#auth/model';
import { AuthService } from '#auth/service';

@Injectable({ providedIn: 'root' })
export class FirebaseApi {
  readonly #firestore = inject(Firestore);

  readonly #user = inject(AuthService).user;

  collectionData$<T>(name: CollectionName): Observable<T[]> {
    const colRef = collection(this.#firestore, name);

    return collectionData(query(colRef, where('uid', '==', this.#user?.uid)), {
      idField: 'id',
    }) as Observable<T[]>;
  }

  addDocument$<T extends DocumentData>(name: CollectionName, document: T): Observable<DocumentReference<DocumentData, DocumentData>> {
    const colRef = collection(this.#firestore, name);
    return from(addDoc(colRef, { ...document, uid: this.#user?.uid }));
  }
}
