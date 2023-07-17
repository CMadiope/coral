import { Component, OnInit } from '@angular/core';
import { faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}

  arrow = faChevronRight;
  heart = faHeart;
  products: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
