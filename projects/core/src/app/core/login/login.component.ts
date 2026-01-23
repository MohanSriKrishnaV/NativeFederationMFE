import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'shared-auth';
@Component({

  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  loading = false;

  constructor(
private auth: AuthService,
    private router: Router
  ) {
    debugger
  }

 async login() {
    if (!this.username.trim()) return;

    this.loading = true;

    // simulate async login
       await    this.auth.login(this.username);

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
  }
}
