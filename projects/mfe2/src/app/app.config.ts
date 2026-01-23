import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { OrdersModule } from './orders/orders.module';
import { SharedEventsModule } from 'shared-events';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),OrdersModule,
    importProvidersFrom(SharedEventsModule),
    BrowserAnimationsModule
  ],
};
