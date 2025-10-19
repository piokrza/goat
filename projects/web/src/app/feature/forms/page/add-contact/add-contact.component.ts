import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ContactFormComponent } from '#forms/component/contact-form';
import { Contact } from '#forms/model';
import { AddContactService } from '#forms/service';

const imports = [ContactFormComponent];

@Component({
  selector: 'echo-add-contact',
  template: `<echo-contact-form (formSubmit)="addContact($event)" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class AddContactComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #addContactService = inject(AddContactService);

  readonly state = this.#addContactService.state;

  addContact(contactData: Contact): void {
    this.#addContactService.addContact$(contactData).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }
}
