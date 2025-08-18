import { DOCUMENT, inject, Injectable, signal } from '@angular/core';

import { Key } from '../../enum';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly #document = inject(DOCUMENT);

  readonly #isDarkMode = signal(JSON.parse(localStorage.getItem(Key.IS_DARK_MODE) ?? 'false') as boolean);
  readonly isDarkMode = this.#isDarkMode.asReadonly();

  readonly #selectedTheme = signal(localStorage.getItem('theme') ?? 'theme-red');
  readonly selectedTheme = this.#selectedTheme.asReadonly();

  readonly themes = ['theme-blue', 'theme-green', 'theme-red'];

  initTheme(): void {
    this.setTheme(this.selectedTheme());
    this.setColorScheme();
  }

  toggleIsDarkMode(): void {
    this.#isDarkMode.set(!this.#isDarkMode());

    this.setColorScheme(this.#isDarkMode());
    localStorage.setItem(Key.IS_DARK_MODE, JSON.stringify(this.#isDarkMode()));
  }

  setTheme(themeName: string): void {
    localStorage.setItem('theme', themeName);
    this.#selectedTheme.set(themeName);

    this.themes.forEach((t) => this.#document.body.classList.remove(t));
    this.#document.body.classList.add(themeName);
  }

  private setColorScheme(isDarkMode?: boolean): void {
    if (isDarkMode === undefined) isDarkMode = this.#isDarkMode();
    this.#document.body.style.setProperty('color-scheme', isDarkMode ? 'dark' : 'light');
  }
}
