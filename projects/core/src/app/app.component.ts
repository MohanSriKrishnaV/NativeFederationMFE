import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { Subject } from 'rxjs';

import { NotificationOrchestratorService } from './core/services/notif-orchestratot.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    LayoutComponent,RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
    

  title = 'core';
  showMenu:boolean=true;

  constructor(private router: Router,    
    // private notificationService: PopUpService,
        // private eventBus: EventBusService
){ {
    console.log(localStorage.getItem('token'));

    localStorage.getItem('token') ? this.showMenu = true : this.showMenu = false;
    if(!localStorage.getItem('token')){
      this.router.navigate(['login']);
    }
    

    const x=setInterval(() => {
      if(localStorage.getItem('token')){
        this.showMenu = true;
        clearInterval(x);
      } 
    }, 1000);
  }
}
 private _notificationOrchestrator =
    inject(NotificationOrchestratorService);

 ngOnInit() {
    this._notificationOrchestrator.init();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
