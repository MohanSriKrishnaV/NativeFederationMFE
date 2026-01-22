import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { ButtonComponent } from 'shared-ui';
import { LayoutComponent } from './core/layout/layout.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    LayoutComponent,RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    

  title = 'core';
  showMenu = false;

  constructor(private router: Router){ {


    localStorage.getItem('token') ? this.showMenu = true : this.showMenu = false;
    if(!localStorage.getItem('token')){
      this.router.navigate(['home']);
    }
   }
  }
}
