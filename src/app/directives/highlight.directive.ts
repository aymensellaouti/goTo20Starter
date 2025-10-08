import { Input, OnInit, inject, input, linkedSignal } from '@angular/core';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'this.bgc()',
    '(mouseenter)': 'this.onMouseEnter()',
    '(mouseleave)': 'this.onMouseLeave()',
  },
})
export class HighlightDirective {
  private element = inject(ElementRef);

  in = input('yellow');
  out = input('red');
  bgc = linkedSignal(() => this.out());

  // ngOnInit() {
  //   this.bgc = this.out;
  // }
  onMouseEnter() {
    this.element.nativeElement.innerHTML = 'IN';
    this.bgc.set(this.in());
  }
  onMouseLeave() {
    this.element.nativeElement.innerHTML = 'OUT';
    this.bgc.set(this.out());
  }
}
