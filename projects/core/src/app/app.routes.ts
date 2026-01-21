import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
      {
    path: 'home',
    loadComponent: () => loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },


];
