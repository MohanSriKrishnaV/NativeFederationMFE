import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersSubMenuItem } from '../../models/orders-menu.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-orders-sub-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './orders-sub-menu.component.html',
  styleUrls: ['./orders-sub-menu.component.scss']
})
export class OrdersSubMenuComponent {
 menuItems: OrdersSubMenuItem[] = [
    { label: 'Orders List', path: 'OrdersList' },
    { label: 'Create Order', path: 'create' }
    // add more dynamically if needed
  ];
}
