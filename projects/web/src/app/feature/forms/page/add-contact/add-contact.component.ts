import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContactFormComponent } from '#forms/component/contact-form';

const imports = [ContactFormComponent];

@Component({
  selector: 'echo-add-contact',
  template: `<echo-contact-form (formSubmit)="addContact()" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class AddContactComponent {
  addContact(): void {
    //
  }
}
