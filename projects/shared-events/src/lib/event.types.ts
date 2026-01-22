export type AppEventType =
  | 'ORDER_CREATED'
  | 'ORDER_APPROVED'
  | 'ORDER_CANCELLED'
  | 'INVENTORY_RESERVED'
  | 'LOW_STOCK_ALERT';

export interface AppEvent<T = any> {
  type: AppEventType;
  payload: T;
  timestamp: number;
}
