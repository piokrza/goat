import { Component } from '@angular/core';

import { ContactFormComponent } from '#forms/component/contact-form';

const imports = [ContactFormComponent];

@Component({
  selector: 'echo-add-contact',
  template: ` <echo-contact-form view="add" /> `,
  imports,
})
export class AddContactComponent {}
