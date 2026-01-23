import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../models/orders.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-list',
  // standalone: true,
  // imports: [],
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent {


   orders$ = this.orders.orders$;

constructor(private orders: OrdersService) {}

}
