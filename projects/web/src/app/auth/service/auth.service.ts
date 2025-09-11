import { inject, Injectable } from '@angular/core';
import {
  Auth,
  updateProfile,
  UserCredential,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable, tap } from 'rxjs';

import { Store } from '#common/abstract';

@Injectable({ providedIn: 'root' })
export class AuthService extends Store<{ isProcessing: boolean }> {
  constructor() {
    super({ isProcessing: false });
  }

  readonly #router = inject(Router);
  readonly #fireAuth = inject(Auth);

  createUserWithEmailAndPassword$(email: string, username: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.#fireAuth, email, password)).pipe(
      tap((res) => {
        updateProfile(res.user, { displayName: username });
      })
    );
  }

  loginWithGoogle$(): Observable<UserCredential> {
    this.update('isProcessing', true);

    return from(signInWithPopup(this.#fireAuth, new GoogleAuthProvider())).pipe(
      tap({
        next: () => {
          this.#router.navigateByUrl('/');
        },
        finalize: () => {
          this.update('isProcessing', false);
        },
      })
    );
  }

  logout(): Promise<void> {
    return this.#fireAuth.signOut();
  }
}
