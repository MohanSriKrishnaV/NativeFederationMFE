import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full' },
    // {path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
      {
    path: 'mfe1',
    loadComponent: () => loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
   {
    path: 'mfe2',
    loadComponent: () => loadRemoteModule('mfe2', './Component').then((m) => m.AppComponent),
  },


];
