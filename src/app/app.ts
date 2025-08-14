import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutService } from '#ui/layout';

@Component({
  selector: 'pg-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App implements OnInit {
  readonly #layoutService = inject(LayoutService);

  ngOnInit(): void {
    this.#layoutService.initTheme();
  }
}
