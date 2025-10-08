import { Component, computed, input, Input, model, OnChanges, output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-is-even',
  imports: [FormsModule],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css',
})
export class IsEvenComponent {
  // @Input()
  x = input.required({
    alias: 'valeur',
    transform: (value: number): number => {
      return 5;
    },
  });
  isEven = computed(() => (this.x() % 2 ? 'is odd' : 'is even'));
  test = model();
  // get isEven() {
  //   return this.x % 2 ? 'is odd' : 'is even';
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);

  //   if(changes['x'])
  //     this.isEven = (changes['x'].currentValue % 2) ? 'is odd' : 'is even';

  // }
}
