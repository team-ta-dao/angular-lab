import { Products } from './../views/products/products';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  constructor(private productService: ProductService) {}

  getCartDataFromLocalStorage(): Observable<[]> {
    const cart = localStorage.getItem('cart');

    if (!cart) {
      return of([]);
    }

    return of(JSON.parse(cart));
  }

  pushDataToCart(cart: Array<Products>){
    localStorage.setItem('cart',JSON.stringify(cart));
    return true;
  }
}
