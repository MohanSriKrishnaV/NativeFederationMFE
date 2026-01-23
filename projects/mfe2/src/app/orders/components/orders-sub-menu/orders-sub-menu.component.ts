import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersSubMenuItem } from '../../models/orders-menu.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-orders-sub-menu',
  templateUrl: './orders-sub-menu.component.html',
  styleUrls: ['./orders-sub-menu.component.scss']
})
export class OrdersSubMenuComponent {
 menuItems: OrdersSubMenuItem[] = [
 { label: 'Orders', path: 'OrdersList', icon: 'list_alt' },
    { label: 'Create Order', path: 'createOrders', icon: 'add_circle' }
  ];
}
