import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-auth',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      shared-auth works!
    </p>
  `,
  styles: [
  ]
})
export class SharedAuthComponent {

}
