import { Injectable } from '@angular/core';

import { Contact } from '#forms/model';

@Injectable({ providedIn: 'root' })
export class EditContactService {
  saveChanges(contact: Partial<Contact>): void {
    // eslint-disable-next-line no-console
    console.log(contact);
  }
}
