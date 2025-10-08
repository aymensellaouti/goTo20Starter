import { Component, inject, signal, WritableSignal } from "@angular/core";
import {
  Observable,
  concatMap,
  map,
  takeWhile,
  scan,
  distinctUntilChanged,
  of,
} from "rxjs";
import { Product } from "./dto/product.dto";
import { ProductService } from "./services/product.service";
import { Settings } from "./dto/product-settings.dto";
import { AsyncPipe } from "@angular/common";
import { rxResource, toObservable, toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [AsyncPipe],
})
export class ProductsComponent {
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  // elle fait partie du state , sa valeur change , il y a des éléments qui en dépendent
  setting: WritableSignal<Settings> = signal({ limit: 12, skip: 0 });
  productService = inject(ProductService);

  //Asynchrone
  products$: Observable<Product[]> = toObservable(this.setting)
  // est ce que j'ai besoin de tous les flux
  //  si oui  => mergeMap et concatMap
  //Est ce que l'ordre est important
  // si oui => concat sinon merge
  // si non => exaustMap et switchMap
  // si oui exahust sinon switch
  .pipe(
    concatMap(setting => this.productService.getProducts(setting)),
    map(apiResponse => apiResponse.products),
    takeWhile(products => !!products.length),
    scan((oldProducts, newProducts) => [...oldProducts,...newProducts])
  );
  // State
  // productsSignal = toSignal(this.products$, {initialValue: []});
  rxProductsRessource = rxResource<Product[], null>({
    stream: () => this.products$
  });
  more() {
    this.setting.update((oldSetting) => ({
      skip: oldSetting.skip + oldSetting.limit,
      limit: oldSetting.limit,
    }));
  }
}
