import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEchoFirestoreConfig } from '#common/auth/firebase/provider';
import { initializeAppTheme } from '#ui/provider';
import { routes } from '#web/app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    initializeAppTheme(),
    provideRouter(routes),
    provideEchoFirestoreConfig(),
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
  ],
};
