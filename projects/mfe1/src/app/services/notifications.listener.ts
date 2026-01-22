import { inject } from '@angular/core';
import { NotificationService } from './notification.service';
import { EventBusService } from 'shared-events';

export function registerNotificationListeners() {
  const eventBus = inject(EventBusService);
  const notificationService = inject(NotificationService);

  eventBus.on<any>('ORDER_CREATED').subscribe(event => {
    notificationService.add({
      id: crypto.randomUUID(),
      message: `Order ${event.payload.orderId} created`,
      type: 'INFO',
      timestamp: Date.now(),
      read: false
    });
  });

  eventBus.on<any>('ORDER_APPROVED').subscribe(event => {
    notificationService.add({
      id: crypto.randomUUID(),
      message: `Order ${event.payload.orderId} approved`,
      type: 'SUCCESS',
      timestamp: Date.now(),
      read: false
    });
  });

  eventBus.on<any>('LOW_STOCK_ALERT').subscribe((event: { payload: { sku: any; }; }) => {
    notificationService.add({
      id: crypto.randomUUID(),
      message: `Low stock for ${event.payload.sku}`,
      type: 'WARNING',
      timestamp: Date.now(),
      read: false
    });
  });
}
