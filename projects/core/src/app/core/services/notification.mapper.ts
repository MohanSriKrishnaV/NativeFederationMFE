import { AppEvent, AppEventType } from 'shared-events';

export function mapEventToMessage(event: AppEvent): string | null {
  switch (event.type) {

    case AppEventType.ORDER_CREATED:
      return `Order ${event.payload.orderId} created successfully`;

    case AppEventType.ORDER_CANCELLED:
      return `Order ${event.payload.orderId} cancelled`;

    case AppEventType.PAYMENT_FAILED:
      return `Payment failed. Please try again`;

    default:
      return null; // silent event
  }
}
