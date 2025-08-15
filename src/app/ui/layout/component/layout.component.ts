import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Path } from '#core/enum';
import { Link } from '#ui/model';
import { ThemeService } from '#ui/service';
import { BreakpointService } from '#ui/service';

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
  selector: 'pg-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  imports,
})
export class LayoutComponent {
  readonly #themeService = inject(ThemeService);

  readonly isDarkMode = this.#themeService.isDarkMode;
  readonly isOverMdBreakpoint = inject(BreakpointService).observe('md');

  readonly selectedTheme = signal(localStorage.getItem('theme') ?? 'theme-red');
  readonly themes = [
    {
      value: 'theme-blue',
      viewValue: '🔵',
    },
    {
      value: 'theme-red',
      viewValue: '🔴',
    },
    {
      value: 'theme-green',
      viewValue: '🟢',
    },
  ];

  readonly links: Link[] = [
    {
      label: 'Template',
      routerLink: '',
    },
    {
      label: 'Web3',
      routerLink: Path.WEB3,
    },
  ];

  setTheme(value: string): void {
    localStorage.setItem('theme', value);
    this.selectedTheme.set(value);
    this.#themeService.setTheme(value);
  }

  toggleThemeMode(): void {
    this.#themeService.toggleIsDarkMode();
  }
}
