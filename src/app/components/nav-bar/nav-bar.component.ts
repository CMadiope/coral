import { Component } from '@angular/core';
import {
  faShoppingCart,
  faHeart,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectProductCount } from 'src/app/state/product/product.selectors';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  mobileNav: boolean = false;
  mobile: boolean = false;
  icon = faBars;
  cart = faShoppingCart;
  heart = faHeart;
  productCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.productCount$ = this.store.select(selectProductCount);
  }

  public showMobileNav(): void {
    this.mobileNav = !this.mobileNav;
    this.mobile = !this.mobile;

    if (this.mobileNav === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
  public clickedOutside(): void {
    this.mobileNav = false;
    this.mobile = false;
  }
}
