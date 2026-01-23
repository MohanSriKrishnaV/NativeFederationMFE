import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerNotificationListeners } from './services/notifications.listener';
import { SharedEventsModule } from 'shared-events';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
 {
      provide: 'APP_INIT',
      useFactory: () => registerNotificationListeners()
    }  ,
      importProvidersFrom(SharedEventsModule)
  
  ],

};
