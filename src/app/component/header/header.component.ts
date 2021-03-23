import { Cart } from './../../views/cart';
import { AddToCartService } from './../../services/add-to-cart.service';
import { Category } from './../../views/category';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  cart: Cart[]=[];

  hasItemInCart = this.cart.length > 0 ? true : false;

  constructor(
    private categoriesService: CategoriesService,
    private cartService: AddToCartService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getCartLocal();

    console.log('CATEGORIES', this.categories);
    console.log('CART', this.cart);
    
  }

  getAllCategories(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  getCartLocal(): void {
    this.cartService
      .getCartDataFromLocalStorage()
      .subscribe((cart) => (this.cart = cart));
  }
}
