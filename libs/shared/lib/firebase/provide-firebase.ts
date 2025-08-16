import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA17iUR56Pm4uUFz9YzV0smpWNKQc3cWC8',
  authDomain: 'echo-bcb21.firebaseapp.com',
  projectId: 'echo-bcb21',
  storageBucket: 'echo-bcb21.firebasestorage.app',
  messagingSenderId: '816886396705',
  appId: '1:816886396705:web:90da9c6dd69d780e7eb060',
};

export const provideEchoFirestoreConfig = (): EnvironmentProviders => {
  return makeEnvironmentProviders([provideFirebaseApp(() => initializeApp(firebaseConfig)), provideFirestore(() => getFirestore())]);
};
