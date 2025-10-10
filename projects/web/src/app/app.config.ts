import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from 'projects/web/src/app';

import { provideEchoFirestoreConfig } from '#auth/firebase/provider';
import { initializeAppTheme, registerIcons } from '#ui/provider';

export const appConfig: ApplicationConfig = {
  providers: [
    registerIcons(),
    provideHttpClient(),
    initializeAppTheme(),
    provideEchoFirestoreConfig(),
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withViewTransitions()),
  ],
};
