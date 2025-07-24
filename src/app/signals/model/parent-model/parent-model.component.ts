import { Component, signal } from '@angular/core';
import { ChildModelComponent } from "../child-model/child-model.component";

@Component({
  selector: 'app-parent-model',
  imports: [ChildModelComponent],
  templateUrl: './parent-model.component.html',
  styleUrl: './parent-model.component.css'
})
export class ParentModelComponent {
  username = signal('sellaouti');
}
