/* eslint-disable no-console */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig, App } from 'src/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
