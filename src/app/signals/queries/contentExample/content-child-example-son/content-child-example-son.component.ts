import { Component, contentChild, contentChildren, effect, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child-example-son',
  imports: [],
  templateUrl: './content-child-example-son.component.html',
  styleUrl: './content-child-example-son.component.css',
})
export class ContentChildExampleSonComponent {
  header = contentChild.required<ElementRef>('header', {});
  content = contentChild.required<ElementRef>('content');

  task = contentChild<ElementRef>('task');

  tasks = contentChildren<ElementRef>('task', {descendants: true});
  loggerEffect = effect(() => {
    console.log('TASKS :');

    console.log(this.tasks());
  });
}
