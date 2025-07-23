import { Component } from '@angular/core';
import { CartListComponent } from "../cart-list/cart-list.component";
import { CartTotalComponent } from "../cart-total/cart-total.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent, CartTotalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
