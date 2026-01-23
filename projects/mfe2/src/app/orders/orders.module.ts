import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OrdersListComponent } from "./components/orders-list/orders-list.component";
import { OrdersRoutingModule } from "./order-routing.module";
import { OrdersSubMenuComponent } from "./components/orders-sub-menu/orders-sub-menu.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink, RouterModule } from "@angular/router";
import { CreateOrdersComponent } from "./components/create-orders/create-orders.component";
import { SharedEventsModule } from "shared-events";



@NgModule({
  declarations: [
    
    OrdersListComponent,
        OrdersSubMenuComponent,
        CreateOrdersComponent,
    // CreateOrderPage,
    // OrderDetailsPage
  ],
  imports: [
    RouterLink,
    RouterModule,
    CommonModule,
    OrdersRoutingModule,
      MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SharedEventsModule  ],
  exports: [OrdersSubMenuComponent]
})
export class OrdersModule {}
