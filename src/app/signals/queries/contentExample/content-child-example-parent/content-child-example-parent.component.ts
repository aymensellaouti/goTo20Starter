import { Component } from '@angular/core';
import { ContentChildExampleSonComponent } from "../content-child-example-son/content-child-example-son.component";
import { CartItemComponent } from "src/app/cart/cart-item/cart-item.component";
import { UserElementsComponent } from "src/app/optimizationPattern/user-elements/user-elements.component";
import { UserResourceComponent } from "src/app/signals/user-resource/user-resource.component";

@Component({
  selector: 'app-content-child-example-parent',
  imports: [ContentChildExampleSonComponent, CartItemComponent, UserElementsComponent, UserResourceComponent],
  templateUrl: './content-child-example-parent.component.html',
  styleUrl: './content-child-example-parent.component.css'
})
export class ContentChildExamplePArentComponent {

}
