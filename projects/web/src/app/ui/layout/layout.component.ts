import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AuthService } from '#auth/service';
import { Path } from '#common/enum';
import { BreadcrumbsComponent } from '#ui/component/breadcrumbs';
import { AppTheme, Link } from '#ui/model';
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
  BreadcrumbsComponent,
];

@Component({
  selector: 'echo-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class LayoutComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #authService = inject(AuthService);
  readonly #themeService = inject(ThemeService);

  readonly isDarkMode = this.#themeService.isDarkMode;
  readonly selectedTheme = this.#themeService.selectedTheme;
  readonly isOverMdBreakpoint = inject(BreakpointService).observe('md');

  readonly links: Link[] = [
    { label: 'Forms', routerLink: Path.FORMS },
    { label: 'Template', routerLink: Path.TEMPLATE },
  ];
  readonly themes: AppTheme[] = [
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

  logout(): void {
    this.#authService.logout$().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }
}
