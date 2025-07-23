import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  n: number = 10;
  productQty = signal<number[]>(
    Array.from({ length: this.n }, (_, i) => i + 1)
  );
}
