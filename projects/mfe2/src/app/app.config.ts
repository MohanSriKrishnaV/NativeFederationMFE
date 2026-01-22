import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { OrdersModule } from './orders/orders.module';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),OrdersModule],
};
