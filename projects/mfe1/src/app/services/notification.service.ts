import { Injectable, signal } from '@angular/core';
const STORAGE_KEY = 'notifications'

@Injectable({ providedIn: 'root' })
export class NotificationService {
constructor() { }

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
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, { body });
        }
      });
    }
  }


}
