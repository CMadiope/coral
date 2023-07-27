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
    let updatedProducts = [...state.products];
    let updatedItemIndex = updatedProducts.findIndex(
      (item) => item.id === action.product.id
    );
    if (updatedItemIndex < 0) {
      updatedProducts.push({ ...action.product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedProducts[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedProducts[updatedItemIndex] = updatedItem;
    }
    return {
      ...state,
      products: [...updatedProducts],
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
    let updatedProducts = [...state.products];
    let updatedItemIndex = updatedProducts.findIndex((item) => item.id === id);
    updatedProducts.splice(updatedItemIndex, 1);
    return {
      ...state,
      products: updatedProducts,
    };
  }),

  on(removeFromWishlist, (state, { id }) => {
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => item.id !== id),
    };
  })
);
