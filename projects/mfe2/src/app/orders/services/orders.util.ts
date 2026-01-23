import { Order, OrderStatus } from "../models/orders.model";

export function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randomId(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
// export function randomStatus(): 'PENDING' | 'SHIPPED' | 'DELIVERED' {
//   return randomFrom(inputStatuses);
// }

export function randomStatus(inputStatuses:any): 'CREATED' | 'APPROVED' | 'CANCELLED' {
  return randomFrom(inputStatuses);
}


const CUSTOMERS = [
  'Acme Corp',
  'Globex',
  'Initech',
  'Umbrella',
  'Wayne Enterprises'
];

const STATUSES: OrderStatus[] = ['CREATED', 'APPROVED', 'CANCELLED'];

export function generateRandomOrder(): any {
  return {
    id: 'ORD-' + Math.floor(Math.random() * 100000),
    customer: CUSTOMERS[Math.floor(Math.random() * CUSTOMERS.length)],
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
  };
}
