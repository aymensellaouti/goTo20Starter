import { AfterContentInit, Component, computed, ContentChild, ContentChildren, contentChildren, DestroyRef, ElementRef, inject, QueryList, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-elements',
  imports: [],
  templateUrl: './list-elements.component.html',
  styleUrl: './list-elements.component.css',
})
export class ListElementsComponent implements AfterContentInit {
  dr = inject(DestroyRef);
  @ContentChild('searchField')
  searchField!: ElementRef<HTMLInputElement>;
  @ContentChildren('element')
  elements!: QueryList<ElementRef>;
  elementsCount = 0;

  ngAfterContentInit(): void {
    // Faire en sorte que l'input prenne directement le focus
    this.searchField?.nativeElement.focus();
    //calculer le nombre d'éléments au départ
    this.elementsCount = this.elements?.length ?? 0;
    // Il y a un bug corriger le d'abord
    this.elements.changes
    .pipe(takeUntilDestroyed(this.dr))
    .subscribe(() => {
      this.elementsCount = this.elements?.length;
    });
  }
}
