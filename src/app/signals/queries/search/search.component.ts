import { Component, effect, ElementRef, input, output, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchLabel = input('Search Players');
  searchValue = signal('');
  searchField = viewChild.required<ElementRef<HTMLInputElement>>('searchField') ;
  focusEffect = effect(() => this.searchField().nativeElement.focus());
}
