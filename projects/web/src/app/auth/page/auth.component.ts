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
  template: `
    <section class="h-screen flex items-center justify-center p-4 bg-red-100">
      <mat-card appearance="outlined" class="w-full max-w-xl p-4">
        <h1 class="text-center mb-8 text-3xl">Login</h1>

        <div class="grid">
          <mat-form-field class="example-form-field">
            <mat-label>Email</mat-label>
            <input matInput type="text" />
          </mat-form-field>

          <mat-form-field class="example-form-field">
            <mat-label>Password</mat-label>
            <input matInput type="password" />
          </mat-form-field>

          <button matButton class="w-full ">Login</button>
        </div>

        <div class="text-center mb-4">Or</div>

        <div class="flex justify-center">
          <button extended matButton="filled" [disabled]="state().isProcessing" (click)="loginWithGoogle()">
            <mat-icon svgIcon="google" />
            Login with Google
          </button>
        </div>
      </mat-card>
    </section>
  `,
  styleUrl: './auth.component.scss',
  imports,
})
export class AuthComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #authService = inject(AuthService);

  readonly state = this.#authService.state;

  readonly form = new FormGroup<AuthForm>({
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    email: new FormControl('', { validators: [Validators.email, Validators.required], nonNullable: true }),
  });

  loginWithGoogle(): void {
    this.#authService.loginWithGoogle$().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  createUserWithEmailAndPassword(): void {
    if (this.form.invalid) {
      this.form.markAllAsDirty();
      return;
    }

    const { email, password, username } = this.form.controls;
    this.#authService.createUserWithEmailAndPassword$(email.value, password.value, username.value);
  }
}
