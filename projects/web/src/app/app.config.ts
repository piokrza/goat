import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from 'projects/web/src/app';

import { provideEchoFirestoreConfig } from '#firebase/provider';
import { initializeAppTheme, initializeCustomIcons } from '#ui/provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    initializeAppTheme(),
    initializeCustomIcons(),
    provideEchoFirestoreConfig(),
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()),
  ],
};
