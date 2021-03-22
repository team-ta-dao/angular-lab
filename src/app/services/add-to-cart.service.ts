import { Observable,of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {


  constructor() { }

  getCartDataFromLocalStorage():Observable<[]>{
    const cart = localStorage.getItem('cart');

    if (!cart) {
      return of([]);
    }

    return of(JSON.parse(cart));
  }
}
