import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeAppTheme } from '#shared/ui/provider';
import { routes } from '#web/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [initializeAppTheme(), provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection(), provideRouter(routes)],
};
