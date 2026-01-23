import { Injectable, signal } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenSignal = signal<string | null>(localStorage.getItem('token'));
  private userSignal = signal<User | null>(
    JSON.parse(localStorage.getItem('user') || 'null')
  );

  token = this.tokenSignal.asReadonly();
  user = this.userSignal.asReadonly();

  isLoggedIn(): boolean {
    return !!this.tokenSignal();
  }

   login(username: string): Promise<void> {
return new Promise((resolve) => {
    const token = btoa(username + '-' + Date.now()); // mock token
    localStorage.setItem('token', token);
    console.log(localStorage.getItem("token"));
    
    this.tokenSignal.set(token);

    const user: User = {
      id: crypto.randomUUID(),
      name: username,
      role: 'ADMIN'
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.userSignal.set(user);
    resolve()
    })
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.tokenSignal.set(null);
    this.userSignal.set(null);
  }
}
