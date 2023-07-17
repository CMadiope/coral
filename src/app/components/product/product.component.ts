import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  heart = faHeart;
  @Input() product: Product;
  constructor(private router: Router) {}

  public openProductDetail(id: string): void {
    this.router.navigate(['details', id]);
  }
}
