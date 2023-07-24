import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProductState } from './product.reducer';

export const selectProducts = (state: AppState) => state.products;
export const selectAllProducts = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);

export const selectProductCount = createSelector(
  createFeatureSelector('products'),
  (state: ProductState) => state.totalQuantity
);
