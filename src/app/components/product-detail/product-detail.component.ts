import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  addProduct,
  addToWishlist,
} from 'src/app/state/product/product.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  // productSub: Subscription;
  routeSub: Subscription;
  product: Product;
  productId: string;
  cart = faShoppingCart;
  heart = faHeart;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: ProductService,
    private productService: ProductService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params['id'];
      this.getProductDetails(this.productId);
    });
  }

  public getProductDetails(id: string): void {
    this.productService
      .getProductDetails(id)
      .subscribe((productResp: Product) => {
        this.product = productResp;
      });
  }

  public addProduct(): void {
    this.store.dispatch(addProduct({ product: this.product }));

    //console.log(this.product);
  }

 
}
