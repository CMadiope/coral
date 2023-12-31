import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  removeProduct,
  removeFromWishlist,
} from 'src/app/state/product/product.action';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  heart = faHeart;
  trash = faTrash;
  @Input() product: Product;
  constructor(
    public router: Router,
    private store: Store,
    private _toastService: ToastService
  ) {}

  public openProductDetail(id: string): void {
    this.router.navigate(['details', id]);
  }

  public removeProduct(product: Product): void {
    this.store.dispatch(removeProduct({ id: product.id }));
    // console.log('product removed');
    this._toastService.default('Product removed from cart');
  }

  public removeWishlist(product: Product): void {
    this.store.dispatch(removeFromWishlist({ id: product.id }));
  }
}
