import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css'],
})
export class ClothingComponent implements OnInit {
  men: Product[];
  women: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getMen().subscribe((data) => {
      this.men = data;
    });
    this.productService.getWomen().subscribe((data) => {
      this.women = data;
    });
  }
}
