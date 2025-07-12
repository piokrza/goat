import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Link } from '#ui/model';
import { BreakpointService, LayoutService } from '#ui/service';

const imports = [
  RouterLink,
  RouterOutlet,
  MatIconModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  RouterLinkActive,
  MatToolbarModule,
  MatSidenavModule,
];

@Component({
  selector: 'pg-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports,
})
export class LayoutComponent {
  readonly #layoutService = inject(LayoutService);

  readonly isDarkMode = this.#layoutService.isDarkMode;
  readonly isOverMdBreakpoint = inject(BreakpointService).observe('md');

  readonly links: Link[] = [
    {
      label: 'Template',
      routerLink: '',
    },
  ];

  toggleTheme(): void {
    this.#layoutService.toggleIsDarkMode();
  }
}
