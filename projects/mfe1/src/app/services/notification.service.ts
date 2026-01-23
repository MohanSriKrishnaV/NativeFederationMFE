import { Injectable, signal } from '@angular/core';

import {EventBusService, NotificationLevel} from 'shared-events';
  import { BehaviorSubject } from 'rxjs';
const STORAGE_KEY = 'notifications'
import { AppEventType } from 'shared-events';
import { Notification } from '../models/notifications.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {

      private notificationsSubject = new BehaviorSubject<Notification[]>(this.load());
  notifications$ = this.notificationsSubject.asObservable()

constructor(private eventBus: EventBusService) {
    this.listenToEvents();
 }


 

 private listenToEvents() {
    this.eventBus
      .on<{ orderId: string }>(AppEventType.ORDER_CREATED)
      .subscribe((event:any) => {
            console.log('Notification received', event);

        this.addNotification(
          `Order ${event.payload.orderId} created`,
          'INFO'
        );
      });
  }


  private load(): Notification[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }


  private notificationsSignal = signal<Notification[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  );

  notifications = this.notificationsSignal.asReadonly();

  add(notification: any) {
    const updated = [notification, ...this.notificationsSignal()];
    this.notificationsSignal.set(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  markAllRead() {
    const updated = this.notificationsSignal().map(n => ({
      ...n,
      read: true
    }));
    this.notificationsSignal.set(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }


  notify(title: string, body: string) {
    if (!('Notification' in window)) {
      console.warn('Notifications not supported');
      return;
    }

    if (Notification.permission === 'granted') {
      new Notification(title, { body });
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission:any) => {
        if (permission === 'granted') {
          new Notification(title, { body });
        }
      });
    }
  }




  
  addNotification(message: string, type: Notification['type']) {
    const notification: any = {
      id: crypto.randomUUID(),
      message,
      type,
      timestamp: Date.now()
    };

    const updated = [notification, ...this.notificationsSubject.value];
    this.notificationsSubject.next(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }



}
