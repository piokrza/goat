import { inject, Injectable } from '@angular/core';
import {
  Auth,
  // updateProfile,
  UserCredential,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable, tap } from 'rxjs';

import { Store } from '#common/abstract';
import { Path } from '#common/enum';

@Injectable({ providedIn: 'root' })
export class AuthService extends Store<{ isProcessing: boolean }> {
  constructor() {
    super({ isProcessing: false });
  }

  readonly #router = inject(Router);
  readonly #auth = inject(Auth);

  readonly user = this.#auth.currentUser;

  createUserWithEmailAndPassword$(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.#auth, email, password)).pipe(
      tap((_) => {
        // updateProfile(res.user, { displayName: username });
      })
    );
  }

  loginWithEmailAndPassword$(email: string, password: string): Observable<UserCredential> {
    this.update('isProcessing', true);

    return from(signInWithEmailAndPassword(this.#auth, email, password)).pipe(
      tap({
        next: () => {
          this.#router.navigate([Path.TEMPLATE]);
        },
        finalize: () => {
          this.update('isProcessing', false);
        },
      })
    );
  }

  loginWithGoogle$(): Observable<UserCredential> {
    this.update('isProcessing', true);

    return from(signInWithPopup(this.#auth, new GoogleAuthProvider())).pipe(
      tap({
        next: () => {
          this.#router.navigate([Path.TEMPLATE]);
        },
        finalize: () => {
          this.update('isProcessing', false);
        },
      })
    );
  }

  logout$(): Observable<void> {
    return from(this.#auth.signOut()).pipe(tap(() => this.#router.navigate([Path.AUTH])));
  }
}
