import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, DocumentData, DocumentReference, Firestore, query, where } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

import { AuthService } from '#auth/service';
import { CollectionMap, CollectionName } from '#common/model';

@Injectable({ providedIn: 'root' })
export class FirebaseApi {
  readonly #firestore = inject(Firestore);

  readonly #user = inject(AuthService).user;

  collectionData$<T extends CollectionName>(name: T): Observable<CollectionMap[T][]> {
    const colRef = collection(this.#firestore, name);

    return collectionData(query(colRef, where('uid', '==', this.#user?.uid)), {
      idField: 'id',
    }) as Observable<CollectionMap[T][]>;
  }

  addDocument$<T extends CollectionName>(name: T, data: CollectionMap[T]): Observable<DocumentReference<DocumentData, DocumentData>> {
    const colRef = collection(this.#firestore, name);
    const promise = addDoc(colRef, { ...data, uid: this.#user?.uid });

    return from(promise);
  }
}
