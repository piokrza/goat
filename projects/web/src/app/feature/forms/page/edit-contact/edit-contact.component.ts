import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ContactFormComponent } from '#forms/component/contact-form';
import { Contact } from '#forms/model';
import { EditContactService } from '#forms/service/edit-contact.service';

const imports = [ContactFormComponent];

@Component({
  selector: 'echo-edit-contact',
  template: `<echo-contact-form view="edit" [isProcessing]="isProcessing()" (formSubmit)="editContact($event)" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class EditContactComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #editContactService = inject(EditContactService);

  readonly isProcessing = this.#editContactService.select('isProcessing');

  editContact(contactData: Contact): void {
    this.#editContactService.editContact$(contactData).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }
}
