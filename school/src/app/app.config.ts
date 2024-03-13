import { ApplicationConfig, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient (),
  ],
};

