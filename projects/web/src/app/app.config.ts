import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideEchoFirestoreConfig } from '#shared/firebase';
import { initializeAppTheme } from '#shared/ui/provider';
import { routes } from '#web/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    initializeAppTheme(),
    provideRouter(routes),
    provideEchoFirestoreConfig(),
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
  ],
};
