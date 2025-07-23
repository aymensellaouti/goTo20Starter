import { Product } from "../products/dto/product.dto";


export interface Cart {
  cartItems: CartItem[]
}

export interface CartItem {
  product: Product;
  quantity: number;
}
