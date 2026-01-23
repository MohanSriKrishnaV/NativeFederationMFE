export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface NotificationEvent {
  type: 'SHOW_NOTIFICATION';
  payload: {
    message: string;
    level: NotificationType;
    duration?: number;
  };
}
