import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PRODUCTS } from './product.data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-filter',
  imports: [AsyncPipe],
  templateUrl: './products-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './products-filter.component.css',
})
export class ProductsFilterComponent {
  readonly products = PRODUCTS;
  protected categories = this.products.map((p) => p.category);

  protected search = new BehaviorSubject<string>('');
  protected category = new BehaviorSubject<string>('');

  protected filteredProducts = combineLatest([this.search, this.category]).pipe(
    debounceTime(300),
    map(([search, category]) => {
      const term = search.toLowerCase();
      return this.products.filter(
        (p) =>
          (!category || p.category === category) &&
          (!term || p.name.toLowerCase().includes(term))
      );
    }),
    takeUntilDestroyed()
  );

  protected updateSearch(search: string) {
    this.search.next(search);
  }

  protected updateCategory(category: string) {
    this.category.next(category);
  }

  protected reset() {
    this.search.next('');
    this.category.next('');
  }
}
