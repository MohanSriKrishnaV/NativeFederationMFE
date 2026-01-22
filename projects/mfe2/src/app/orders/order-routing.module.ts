import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  OrdersListComponent} from './components/orders-list/orders-list.component';


const routes: Routes = [
    {path: '', redirectTo: 'OrdersList', pathMatch: 'full'},
  {
    path: 'OrdersList',
    component: OrdersListComponent,
  },
//   {
//     path: 'create',
//     component: CreateOrderPage,
//   },
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
