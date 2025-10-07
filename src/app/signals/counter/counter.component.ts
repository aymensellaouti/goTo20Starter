import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.update(ancienneValeur => ancienneValeur + 1)
  }

  decrement() {
    this.counter.update((ancienneValeur) => ancienneValeur - 1);
  }

}
