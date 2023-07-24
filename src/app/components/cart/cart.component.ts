import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectAllProducts } from 'src/app/state/product/product.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public allProducts$ = this.store.select(selectAllProducts);
  constructor(private store: Store<AppState>) {}
}
