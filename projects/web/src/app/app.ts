import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { MatIconRegistry } from '@angular/material/icon';

const imports = [RouterOutlet];

@Component({
  selector: 'echo-root',
  template: `<router-outlet />`,
  imports,
})
export class App {
  constructor() {
    this.#matIconRegistry.addSvgIcon('google', this.#domSanitizer.bypassSecurityTrustResourceUrl('../asset/icon/google.svg'));
  }

  readonly #domSanitizer = inject(DomSanitizer);
  readonly #matIconRegistry = inject(MatIconRegistry);
}
