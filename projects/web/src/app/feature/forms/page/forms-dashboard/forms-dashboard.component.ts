import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { Path } from '#common/enum';

const imports = [MatButtonModule, RouterLink];

@Component({
  selector: 'echo-reactive-forms',
  template: `
    <h1>My Contacts</h1>
    <div class="mt-8">
      <button matButton="filled" [routerLink]="[Path.EDIT_CONTACT]">Add Contact</button>
    </div>
  `,
  imports,
})
export class FormsDashboardComponent {
  readonly Path = Path;
}
