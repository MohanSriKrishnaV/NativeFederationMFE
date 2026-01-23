import { Injectable } from '@angular/core';
import { AppEventType, EventBusService } from 'shared-events';
import { AppEvent } from 'shared-events';
import { PopUpService } from './popup.service';



@Injectable({ providedIn: 'root' })
export class NotificationOrchestratorService {

  constructor(
    private eventBus: EventBusService,
    private popup: PopUpService   // wraps MatSnackBar
  ) {
    this.init();
  }

   init() {
    this.eventBus.on(AppEventType.ORDER_CREATED)
      .subscribe(event => {
        this.handle(event);
      });

    this.eventBus.on(AppEventType.ORDER_FAILED)
      .subscribe(event => {
        this.handle(event);
      });
  }

  private handle(event: AppEvent) {
    const message = this.buildMessage(event);

    switch (event.level) {
      case 'success':
        this.popup.success(message);
        break;
      case 'error':
        this.popup.error(message);
        break;
      case 'warn':
        this.popup.warn(message);
        break;
      default:
        this.popup.info(message);
    }
  }

  private buildMessage(event: AppEvent): string {
    switch (event.type) {
      case AppEventType.ORDER_CREATED:
        return `Order ${event.payload?.orderId} created successfully`;

      case AppEventType.ORDER_FAILED:
        return `Order creation failed`;

      default:
        return 'Something happened';
    }
  }
}
