import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AuthForm } from '#auth/model';
import { AuthService } from '#auth/service';

const imports = [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, ReactiveFormsModule];

@Component({
  selector: 'echo-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports,
})
export class AuthComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #authService = inject(AuthService);

  readonly state = this.#authService.state;

  readonly form = new FormGroup<AuthForm>({
    password: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.email, Validators.required], nonNullable: true }),
  });

  loginWithGoogle(): void {
    this.#authService.loginWithGoogle$().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  loginWithEmailAndPassword(): void {
    if (this.form.invalid) {
      this.form.markAllAsDirty();
      return;
    }

    const { email, password } = this.form.getRawValue();
    this.#authService.loginWithEmailAndPassword$(email, password).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  createUserWithEmailAndPassword(): void {
    if (this.form.invalid) {
      this.form.markAllAsDirty();
      return;
    }

    const { email, password } = this.form.controls;
    this.#authService.createUserWithEmailAndPassword$(email.value, password.value);
  }
}
