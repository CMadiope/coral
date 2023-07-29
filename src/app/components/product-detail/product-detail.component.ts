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
import { AppState } from 'src/app/state/app.state';
import { ToastService } from 'angular-toastify';

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
    private store: Store<AppState>,
    private _toastService: ToastService
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
    this._toastService.success('Product added to cart');
    //console.log(this.product);
  }
  public addToWishlist(): void {
    this.store.dispatch(addToWishlist({ product: this.product }));
    this._toastService.info('Product added to wishlist');
  }
}
