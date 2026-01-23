import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedEventsComponent } from './shared-events.component';
import { EventBusService } from './event-bus.service';
import { SnackBarService } from './notifications/snackBar.service';



@NgModule({
  declarations: [
    SharedEventsComponent
  ],
  imports: [
  ],
  exports: [
    SharedEventsComponent
  ]
})
export class SharedEventsModule { 
    static forRoot(): ModuleWithProviders<SharedEventsModule> {
    return {
      ngModule: SharedEventsModule,
      providers: [EventBusService] // ✅ singleton instance
    };
}
}
