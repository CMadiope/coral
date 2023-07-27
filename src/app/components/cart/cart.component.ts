import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';
import { AppState } from 'src/app/state/app.state';
import { selectAllProducts } from 'src/app/state/product/product.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //public allProducts$ = this.store.select(selectAllProducts);
  cart: Product[];
  totalPrice: number;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('products').subscribe((products) => {
      this.totalPrice = products.cart.reduce((count, curItem) => {
        return count + curItem.quantity * curItem.price;
      }, 0);

      this.cart = products.cart;
    });
  }
}
