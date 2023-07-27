import { ActionReducer, INIT, UPDATE, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';
import {
  addProduct,
  addToWishlist,
  removeFromWishlist,
  removeProduct,
} from './product.action';
import { AppState } from '../app.state';

export interface ProductState {
  cart: Product[];
  wishlist: Product[];
  totalQuantity: number;
  totalPrice: number;
}

export const initialState: ProductState = {
  cart: [],
  wishlist: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const productReducer = createReducer(
  initialState,
  on(addProduct, (state, action) => {
    let updatedProducts = [...state.cart];
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
      cart: [...updatedProducts],
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
    let updatedProducts = [...state.cart];
    let updatedItemIndex = updatedProducts.findIndex((item) => item.id === id);
    updatedProducts.splice(updatedItemIndex, 1);
    return {
      ...state,
      cart: [...updatedProducts],
    };
  }),

  on(removeFromWishlist, (state, { id }) => {
    let updatedProducts = [...state.wishlist];
    let updatedItemIndex = updatedProducts.findIndex((item) => item.id === id);
    updatedProducts.splice(updatedItemIndex, 1);
    return {
      ...state,
      wishlist: [...updatedProducts],
    };
  })
);

// export const metaReducerLocalStorage = (
//   reducer: ActionReducer<AppState>
// ): ActionReducer<AppState> => {
//   return (state, action) => {
//     if (action.type === INIT || action.type === UPDATE) {
//       const storageValue = localStorage.getItem('state');
//       if (storageValue) {
//         try {
//           return JSON.parse(storageValue);
//         } catch {
//           localStorage.removeItem('state');
//         }
//       }
//     }
//     const nextState = reducer(state, action);
//     localStorage.setItem('state', JSON.stringify(nextState));
//     return nextState;
//   };
// };
