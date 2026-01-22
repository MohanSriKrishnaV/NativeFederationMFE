import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NotificationsComponent } from './notif/notifications/notifications.component';
import { NotificationService } from './services/notification.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private notificationService: NotificationService
  ) {
    this.triggerNotification()
  }
  triggerNotification() {
    this.notificationService.notify('Welcome to MFE1', 'This is a notification from MFE1 application.');
  }
  title = 'mfe1';
}
