import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { CollectionName } from '../';

@Injectable({ providedIn: 'root' })
export class FirebaseApi {
  readonly #firestore = inject(Firestore);

  collectionData$<T>(name: CollectionName): Observable<T> {
    const colRef = collection(this.#firestore, name);
    return collectionData(colRef, { idField: 'id' }) as Observable<T>;
  }
}
