import { Component, ViewEncapsulation } from '@angular/core';
import { TwoComponent } from "src/app/change Detection/two.component";
import { ThreeComponent } from "src/app/change Detection/three.component";

@Component({
  selector: 'app-start-cd',
  imports: [TwoComponent, ThreeComponent],
  templateUrl: './start-cd.component.html',
  styleUrl: './start-cd.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class StartCdComponent {}
