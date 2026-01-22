import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { OrdersRoutingModule } from "./order-routing.module";
import { OrdersSubMenuComponent } from "./components/orders-sub-menu/orders-sub-menu.component";

@NgModule({
  declarations: [
    OrdersListComponent
    // CreateOrderPage,
    // OrderDetailsPage
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    OrdersSubMenuComponent
  ],
  exports: [OrdersSubMenuComponent]
})
export class OrdersModule {}
