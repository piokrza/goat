import { ApplicationConfig, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app';

import { initializeAppTheme } from '#ui/provider';

export const appConfig: ApplicationConfig = {
  providers: [
    initializeAppTheme(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
  ],
};
