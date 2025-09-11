import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Link } from '#ui/model';
import { ThemeService, BreakpointService } from '#ui/service';

const imports = [
  RouterLink,
  RouterOutlet,
  MatIconModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatButtonModule,
  MatTooltipModule,
  RouterLinkActive,
  MatToolbarModule,
  MatSidenavModule,
  ReactiveFormsModule,
];

@Component({
  selector: 'echo-layout',
  templateUrl: './layout.component.html',
  imports,
})
export class LayoutComponent {
  readonly #themeService = inject(ThemeService);

  readonly isDarkMode = this.#themeService.isDarkMode;
  readonly selectedTheme = this.#themeService.selectedTheme;
  readonly isOverMdBreakpoint = inject(BreakpointService).observe('md');

  readonly links: Link[] = [{ label: 'Template', routerLink: '' }];
  readonly themes = [
    { value: 'theme-blue', viewValue: '🔵' },
    { value: 'theme-red', viewValue: '🔴' },
    { value: 'theme-green', viewValue: '🟢' },
  ];

  setTheme(value: string): void {
    this.#themeService.setTheme(value);
  }

  toggleThemeMode(): void {
    this.#themeService.toggleIsDarkMode();
  }
}
