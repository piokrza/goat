import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContactFormComponent } from '#forms/component/contact-form';

const imports = [ContactFormComponent];

@Component({
  selector: 'echo-edit-contact',
  template: `<echo-contact-form view="edit" (formSubmit)="editContact()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class AddContactComponent {
  editContact(): void {
    //
  }
}
