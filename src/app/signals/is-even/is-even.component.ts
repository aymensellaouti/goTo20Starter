import { Component, computed, input, Input, OnChanges, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-is-even',
  imports: [],
  templateUrl: './is-even.component.html',
  styleUrl: './is-even.component.css',
})
export class IsEvenComponent  {
  // @Input()
  x = input.required<number>({
    alias: 'valeur',
    // transform: (value: number): number => {
    //   return 5
    // }
  });
  isEven = computed(() => this.x() % 2 ? 'is odd' : 'is even')
  // get isEven() {
  //   return this.x % 2 ? 'is odd' : 'is even';
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);

  //   if(changes['x'])
  //     this.isEven = (changes['x'].currentValue % 2) ? 'is odd' : 'is even';

  // }
}
