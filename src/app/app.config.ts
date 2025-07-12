import { ApplicationConfig, provideZonelessChangeDetection, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimationsAsync(), provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection(), provideRouter(routes)],
};
