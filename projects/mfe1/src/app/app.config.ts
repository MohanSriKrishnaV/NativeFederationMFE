import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerNotificationListeners } from './services/notifications.listener';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
 {
      provide: 'APP_INIT',
      useFactory: () => registerNotificationListeners()
    }  ],

};
