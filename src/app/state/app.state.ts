import { ProductState } from './product/product.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { productReducer } from './product/product.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface AppState {
  products: ProductState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['products'], rehydrate: true })(reducer);
}

export const metaReducers:MetaReducer<AppState>[] = [localStorageSyncReducer]
