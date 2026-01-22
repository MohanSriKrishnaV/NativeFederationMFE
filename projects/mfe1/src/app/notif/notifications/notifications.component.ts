import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AppNotification } from '../../models/notifications.model';



type NotificationType = 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  timestamp: number;
  read: boolean;
}


@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  private STORAGE_KEY = 'notifications';

notifications = signal<AppNotification[]>([]);

  ngOnInit(): void {
    this.load();
  }

  load() {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    this.notifications.set(raw ? JSON.parse(raw) : []);
  }

  markAsRead(id: string) {
    const updated = this.notifications().map(n =>
      n.id === id ? { ...n, read: true } : n
    );
    this.save(updated);
  }

  clearAll() {
    this.save([]);
  }

  

  private save(list: AppNotification[]) {
  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
  this.notifications.set(list);
}




  icon(type: NotificationType): string {
    return {
      INFO: 'info',
      SUCCESS: 'check_circle',
      WARNING: 'warning',
      ERROR: 'error'
    }[type];
  }
}