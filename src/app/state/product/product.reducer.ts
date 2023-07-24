import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';
import {
  addProduct,
  addToWishlist,
  removeFromWishlist,
  removeProduct,
} from './product.action';

export interface ProductState {
  products: Product[];
  wishlist: Product[];
  totalQuantity: number;
  totalPrice: number;
}

export const initialState: ProductState = {
  products: [],
  wishlist: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const productReducer = createReducer(
  initialState,
  on(addProduct, (state, action) => {
    let duplicate = false;
    state.products.map((product: Product) => {
      if (product.id === action.product.id) {
        duplicate = true;
        product.quantity++;
      }
    });
    if (duplicate) {
      return {
        ...state,
        totalQuantity: state.totalQuantity++,
      };
    }
    return {
      ...state,
      products: [...state.products, action.product],
      totalQuantity: state.totalQuantity + 1,
      totalPrice: Number((state.totalPrice + action.product.price).toFixed(2)),
    };
  }),

  on(addToWishlist, (state, action) => {
    let duplicate = false;
    state.wishlist.map((product: Product) => {
      if (product.id === action.product.id) {
        duplicate = true;
      }
    });
    if (duplicate) {
      return state;
    }
    return {
      ...state,
      wishlist: [...state.wishlist, action.product],
    };
  }),

  on(removeProduct, (state, { id }) => {
    return {
      ...state,
      products: state.products.filter((product) => product.id !== id),
    };
  }),

  on(removeFromWishlist, (state, { id }) => {
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => item.id !== id),
    };
  })
);
