import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from 'shared-auth';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'login', component:LoginComponent
    },

    {path: 'home',canActivate: [AuthGuard],component:HomeComponent },
      {
    path: 'notification',canActivate: [AuthGuard],
    loadComponent: () => loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
   {
    path: 'mfe2',canActivate: [AuthGuard],
    loadComponent: () => loadRemoteModule('mfe2', './Component').then((m) => m.AppComponent),
  },

  {
    path:"**",
    component:NotFoundComponent
  }


];
