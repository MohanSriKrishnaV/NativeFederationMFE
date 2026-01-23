export interface Order {
  id: string;
  customer: string;
  items: { sku: string; qty: number }[];
  status: 'CREATED' | 'APPROVED' | 'CANCELLED';
}


export type OrderStatus = 'CREATED' | 'APPROVED' | 'CANCELLED';

export interface Order {
  id: string;
  customer: string;
  status: OrderStatus;
}
