import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';
import { AppState } from 'src/app/state/app.state';
import { selectWishlistTotal } from 'src/app/state/product/product.selectors';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  //public allProducts$ = this.store.select(selectWishlistTotal);
  wishlist: Product[];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('products').subscribe((products) => {
      this.wishlist = products.wishlist;
    });
  }
}
