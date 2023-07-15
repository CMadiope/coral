import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  mobileNav: boolean = false;
  mobile: boolean = false;
  icon = faBars;

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
