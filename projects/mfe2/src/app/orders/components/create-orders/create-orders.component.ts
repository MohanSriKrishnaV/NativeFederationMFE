import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../services/orders.service';
import { randomFrom, randomId, randomStatus } from '../../services/orders.util';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.scss']
})
export class CreateOrdersComponent {




  constructor(private orders: OrdersService) {}

 create() {
    this.orders.createOrder();
  }
  
}
