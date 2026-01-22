import { Routes } from '@angular/router';

export const routes: Routes = [
   {path: '', redirectTo: 'orders', pathMatch: 'full'},
    {
        path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
    }
];
