import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';

import { ThemeService } from '#ui/service';

export const initializeAppTheme = (): EnvironmentProviders => {
  return provideAppInitializer(() => inject(ThemeService).initTheme());
};
