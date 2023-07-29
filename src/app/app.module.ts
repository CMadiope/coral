import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { clickedOutsideDirective } from './ClickedOutside.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product/product.reducer';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { metaReducers } from './state/app.state';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    clickedOutsideDirective,
    FooterComponent,
    ProductComponent,
    ProductDetailComponent,
    ClothingComponent,
    JeweleryComponent,
    ElectronicsComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    AngularToastifyModule,
    StoreModule.forRoot({ products: productReducer }, { metaReducers }),
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule {}
