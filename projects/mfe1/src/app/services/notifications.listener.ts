import { inject } from '@angular/core';
import { NotificationService } from './notification.service';
import { EventBusService } from 'shared-events';
import { AppEventType } from 'shared-events';

export function registerNotificationListeners() {
  const eventBus = inject(EventBusService);
  const notificationService = inject(NotificationService);

  eventBus.on<any>(AppEventType.ORDER_CREATED).subscribe(event => {
    notificationService.add({
      id: crypto.randomUUID(),
      message: `Order ${event.payload.orderId} created`,
      type: 'INFO',
      timestamp: Date.now(),
      read: false
    });
  });

  eventBus.on<any>(AppEventType.ORDER_APPROVED).subscribe(event => {
    notificationService.add({
      id: crypto.randomUUID(),
      message: `Order ${event.payload.orderId} approved`,
      type: 'SUCCESS',
      timestamp: Date.now(),
      read: false
    });
  });

  eventBus.on<any>(AppEventType.LOW_STOCK_ALERT).subscribe((event:any) => {
    notificationService.add({
      id: crypto.randomUUID(),
      message: `Low stock for ${event.payload.sku}`,
      type: 'WARNING',
      timestamp: Date.now(),
      read: false
    });
  });
}
