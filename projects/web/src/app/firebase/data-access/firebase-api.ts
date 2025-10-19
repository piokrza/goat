import { inject, Injectable } from '@angular/core';
import {
  doc,
  query,
  where,
  addDoc,
  Firestore,
  deleteDoc,
  updateDoc,
  collection,
  DocumentData,
  collectionData,
  DocumentReference,
} from '@angular/fire/firestore';
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

  addDocument$<T extends CollectionName>(
    colleciontName: T,
    data: CollectionMap[T]
  ): Observable<DocumentReference<DocumentData, DocumentData>> {
    const collectionRef = collection(this.#firestore, colleciontName);

    return from(addDoc(collectionRef, { ...data, uid: this.#user?.uid }));
  }

  updateDocument$<T extends CollectionName>(colleciontName: T, docId: string, data: Partial<DocumentData>): Observable<void> {
    const documentRef = doc(this.#firestore, colleciontName, docId);

    return from(updateDoc(documentRef, data));
  }

  removeDocument$<T extends CollectionName>(collectionName: T, docId: string): Observable<void> {
    const documentRef = doc(this.#firestore, collectionName, docId);

    return from(deleteDoc(documentRef));
  }
}
