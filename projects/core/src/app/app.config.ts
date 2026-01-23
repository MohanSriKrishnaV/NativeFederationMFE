import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { NotificationOrchestratorService } from './core/services/notif-orchestratot.service';
import { matSnackBarAnimations } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideAnimations(),
    NotificationOrchestratorService,MatSnackBar 
  ],
};
