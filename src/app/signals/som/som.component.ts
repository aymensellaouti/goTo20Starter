import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-som',
    imports: [FormsModule],
    templateUrl: './som.component.html',
    styleUrl: './som.component.css'
})
export class SomComponent {
  x = 3;
  y = 5;
  z = this.x + this.y;
}
