import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectWishlistTotal } from 'src/app/state/product/product.selectors';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  public allProducts$ = this.store.select(selectWishlistTotal);

  constructor(private store: Store<AppState>) {}
}
