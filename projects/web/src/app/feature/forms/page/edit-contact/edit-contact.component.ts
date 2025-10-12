import { Component } from '@angular/core';

import { ContactFormComponent } from '#forms/component/contact-form';

const imports = [ContactFormComponent];

@Component({
  selector: 'echo-edit-contact',
  template: `<echo-contact-form view="edit" (formSubmit)="editContact()" />`,
  imports,
})
export class AddContactComponent {
  editContact(): void {
    //
  }
}
