import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { firebaseConfig } from '#common/auth/firebase/provider';

export const provideEchoFirestoreConfig = (): EnvironmentProviders => {
  return makeEnvironmentProviders([provideFirebaseApp(() => initializeApp(firebaseConfig)), provideFirestore(() => getFirestore())]);
};
