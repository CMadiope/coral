import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'details/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'clothing',
    component: ClothingComponent,
  },
  {
    path: 'jewelery',
    component: JeweleryComponent,
  },
  {
    path: 'electronics',
    component: ElectronicsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
