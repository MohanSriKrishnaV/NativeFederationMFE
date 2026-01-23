import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../models/orders.model';
import { generateRandomOrder } from './orders.util';
import { AppEventType, EventBusService, NotificationLevel } from 'shared-events';

enum OrderStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  CANCELLED = 'CANCELLED' 
} 

enum level {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARN = 'warn'
}

const STORAGE_KEY = 'orders';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private eventBus: EventBusService) {}

  private ordersSubject = new BehaviorSubject<Order[]>(this.loadFromStorage());
  orders$ = this.ordersSubject.asObservable();

  createOrder() {
    const order = generateRandomOrder();
    const updated = [...this.ordersSubject.value, order];
    this.updateState(updated);
      this.eventBus.emit({
          id: crypto.randomUUID(),
    type: AppEventType.ORDER_CREATED,
      level: 'success' as NotificationLevel,
    payload: { orderId: order.id }
  })
}

  private updateState(orders: Order[]) {
    this.ordersSubject.next(orders);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }

  private loadFromStorage(): Order[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }
}
