import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEchoFirestoreConfig } from '#auth/firebase/provider';
import { initializeAppTheme, registerIcons } from '#ui/provider';

export const appConfig: ApplicationConfig = {
  providers: [
    registerIcons(),
    provideHttpClient(),
    initializeAppTheme(),
    provideRouter(routes),
    provideEchoFirestoreConfig(),
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
  ],
};
