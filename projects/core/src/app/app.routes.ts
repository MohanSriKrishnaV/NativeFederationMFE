import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full' },
    // {path: 'home', loadComponent: () => import('./core/layout/layout.component').then(m => m.LayoutComponent) },
      {
    path: 'mfe1',
    loadComponent: () => loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
   {
    path: 'mfe2',
    loadComponent: () => loadRemoteModule('mfe2', './Component').then((m) => m.AppComponent),
  }
  
  // ,
  // {
  //   path:"**",
  //   component:NotFoundComponent
  // }


];
