import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';

export const addProduct = createAction(
  '[ProductDetail Page] Add Product',
  props<{ product: Product }>()
);
export const addToWishlist = createAction(
  '[ProductDetail Page] Add To Wishlist',
  props<{ product: Product }>()
);

export const removeProduct = createAction(
  '[Cart Page] Remove Product',
  props<{ id: string }>()
);
export const removeFromWishlist = createAction(
  '[Wishlist Page] Remove From Wishlist',
  props<{ id: string }>()
);
