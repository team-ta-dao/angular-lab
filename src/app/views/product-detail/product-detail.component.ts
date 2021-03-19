import { ProductService } from './../../services/product.service';
import { Products } from './../products/products';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Products = {
    id: 0,
    name: '',
    img: '',
    price: 0,
    friendlyName: '',
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const friendlyName = this.route.snapshot.paramMap.get('friendlyName');
    console.log('Friendly Name', friendlyName);

    this.productService
      .getProduct(friendlyName ? friendlyName : '')
      .subscribe((product) => (this.product = product));
  }

  public onAddToCart(id:number){
    console.log('Clicked', id);
  }
}
