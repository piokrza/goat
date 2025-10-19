import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

import { Path } from '#common/enum';
import { FirebaseApi } from '#firebase/data-access';
import { ContactFormComponent } from '#forms/component/contact-form';
import { Contact } from '#forms/model';

const imports = [ContactFormComponent];

@Component({
  selector: 'echo-add-contact',
  template: `<echo-contact-form (formSubmit)="addContact($event)" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class AddContactComponent {
  readonly #router = inject(Router);
  readonly #destroyRef = inject(DestroyRef);
  readonly #firebaseApi = inject(FirebaseApi);

  addContact(contactData: Contact): void {
    this.#firebaseApi
      .addDocument$('contact', contactData)
      .pipe(
        tap(() => this.#router.navigate([Path.FORMS])),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }
}
