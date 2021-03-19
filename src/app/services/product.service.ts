import { PRODUCTS } from './../views/mock-data-products';
import { Products } from './../views/products/products';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Observable<Products[]> {
    const products = of(PRODUCTS);
    return products;
  }

  getProduct(friendlyName: string): Observable<Products> {
    const product = PRODUCTS.find(
      (p) => p.friendlyName === friendlyName
    ) as Products;
    return of(product);
  }
}
