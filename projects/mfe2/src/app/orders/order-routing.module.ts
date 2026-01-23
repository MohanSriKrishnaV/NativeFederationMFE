import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  OrdersListComponent} from './components/orders-list/orders-list.component';
import { CreateOrdersComponent } from './components/create-orders/create-orders.component';


const routes: Routes = [
    {path: '', redirectTo: 'OrdersList', pathMatch: 'full'},
  {
    path: 'OrdersList',
    component: OrdersListComponent,
  },
  {
    path: 'createOrders',
    component:CreateOrdersComponent,
  },
//   {
//     path: ':id',
//     component: OrderDetailsPage,
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
