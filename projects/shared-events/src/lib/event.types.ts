

    export enum AppEventType {
  ORDER_CREATED = 'ORDER_CREATED',
  ORDER_APPROVED = 'ORDER_APPROVED',
  ORDER_CANCELLED = 'ORDER_CANCELLED',
  INVENTORY_RESERVED = 'INVENTORY_RESERVED',
  LOW_STOCK_ALERT = 'LOW_STOCK_ALERT',
  SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  ORDER_FAILED = "ORDER_FAILED"
  
}

// export enum NotificationLevel {
//   SUCCESS = 'success',
//   ERROR = 'error',
//   INFO = 'info',
//   WARN = 'warn'
// }



export type NotificationLevel = 'success' | 'error' | 'warn' | 'info';

export interface AppEvent<T = any> {
  id: string;
  type: AppEventType;
  payload?: T;
  level?: NotificationLevel;
  timestamp?: number;
}




 export type DomainEvent =
   {
      type: 'ORDER_CREATED';
      payload: { orderId: string };
    };


    export type AppEventInput<T = any> = Omit<AppEvent<T>, 
    'timestamp'>;
