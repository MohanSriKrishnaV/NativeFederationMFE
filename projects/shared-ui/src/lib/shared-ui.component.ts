import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-ui',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      shared-ui works!
    </p>
  `,
  styles: [
  ]
})
export class SharedUiComponent {

}
