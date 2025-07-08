import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LayoutService } from '#ui/service';

@Component({
  selector: 'pg-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App implements OnInit {
  readonly #layoutService = inject(LayoutService);

  protected title = 'playground';

  ngOnInit(): void {
    this.#layoutService.initTheme();
  }
}
