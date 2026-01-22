export interface Notification {
  id: string;
  message: string;
  type: 'INFO' | 'SUCCESS' | 'WARNING';
  timestamp: number;
  read: boolean;
}


export interface AppNotification {
  id: string;
  message: string;
  type: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
  timestamp: number;
  read: boolean;
}
