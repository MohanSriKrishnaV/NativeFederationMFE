import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class PopUpService {

  constructor(private snackBar: MatSnackBar) {}

  success(msg: string) {
    this.open(msg, 'OK', 3000);
  }

  error(msg: string) {
    this.open(msg, 'Close', 5000);
  }

  warn(msg: string) {
    this.open(msg, 'Dismiss', 4000);
  }

  info(msg: string) {
    this.open(msg, 'Got it', 3000);
  }

  private open(message: string, action: string, duration: number) {
    debugger
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
