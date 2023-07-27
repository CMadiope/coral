import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductState } from './product.reducer';

export const selectProducts = (state: AppState) => state.products;
export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductState) => state.cart
);

export const selectProductCount = createSelector(
  selectProducts,
  (state: ProductState) => state.cart.length
);

export const selectWishlist = (state: AppState) => state.products;
export const selectWishlistTotal = createSelector(
  selectWishlist,
  (state: ProductState) => state.wishlist
);
