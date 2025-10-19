import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { Contact } from '#forms/model';
import { ConfirmDialogService } from '#ui/service';

const imports = [MatButtonModule, RouterLink, MatDividerModule, MatIconModule, RouterLink, MatTooltipModule];

@Component({
  selector: 'echo-reactive-forms',
  templateUrl: './forms-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class FormsDashboardComponent implements OnInit {
  readonly #router = inject(Router);
  readonly #destroyRef = inject(DestroyRef);
  readonly #firestoreApi = inject(FirebaseApi);
  readonly #confirmDialog = inject(ConfirmDialogService);

  readonly isLoading = signal(false);
  readonly contacts = signal<Contact[]>([]);

  readonly Path = Path;

  ngOnInit(): void {
    this.loadContacts();
  }

  removeContact({ id, firstName, lastName }: Contact): void {
    this.#confirmDialog
      .open$({ title: `Are you sure you want to delete ${[firstName, lastName].join(' ')} contact?` })
      .pipe(
        switchMap(() => this.#firestoreApi.removeDocument$('contact', id)),
        tap(() => this.#router.navigate([Path.FORMS])),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  private loadContacts(): void {
    this.isLoading.set(true);
    this.#firestoreApi
      .collectionData$('contact')
      .pipe(
        tap({
          next: (contacts) => {
            this.contacts.set(contacts);
            this.isLoading.set(false);
          },
          error: () => this.isLoading.set(false),
        })
      )
      .subscribe();
  }
}
