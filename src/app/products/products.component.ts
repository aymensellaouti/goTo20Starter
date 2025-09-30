import { Component, inject, signal } from "@angular/core";
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

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.css"],
    standalone: false
})
export class ProductsComponent {
  /* Todo : Faire le nécessaire pour créer le flux des produits à afficher */
  /* Tips : vous pouvez voir les différents imports non utilisés et vous en inspirer */
  setting: Settings = {limit: 12, skip: 0};
  productService = inject(ProductService);

  products$: Observable<Product[]> = of([]);
  products = signal([]);
  more() {

  }
}
