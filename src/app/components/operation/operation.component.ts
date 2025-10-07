import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SomComponent } from "src/app/signals/som/som.component";

@Component({
  selector: 'app-operation',
  imports: [SomComponent, FormsModule],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.css'
})
export class OperationComponent {
  x = 0;
  y = 0;
}
