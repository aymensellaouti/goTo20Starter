import { Component, ElementRef, QueryList, ViewChild, viewChild, viewChildren, ViewContainerRef } from '@angular/core';
import { CompteurComponent } from "src/app/destroyRefInjectionContext/compteur/compteur.component";
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@Component({
  selector: 'app-view-child-example',
  imports: [CompteurComponent, HighlightDirective],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.css',
})
export class ViewChildExampleComponent {
  @ViewChild('componentTitle', { static: true })
  componentTitle!: ElementRef;

  compteurComponent = viewChild<CompteurComponent>(CompteurComponent);
  compteurComponentElemetRef = viewChild.required(CompteurComponent, {
    read: ElementRef,
  });
  compteurComponentHighlightDirective = viewChild(CompteurComponent, {
    read: HighlightDirective,
  });
  ingredients = viewChildren<ElementRef, HighlightDirective>('ingredient', {
    read: HighlightDirective,
  });

  compteurs = viewChildren<CompteurComponent>(CompteurComponent);
  ngOnInit() {
    console.log('onInit ViewChild', this.componentTitle);
    console.log('onInit ViewChild', this.ingredients());
    // this.ingredients().forEach((ing) => {
    //   console.log(ing);
    //   ing.nativeElement.style.color = 'green';
    // });
  }
}
