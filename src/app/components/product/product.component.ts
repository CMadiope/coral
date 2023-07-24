import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { removeProduct } from 'src/app/state/product/product.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  heart = faHeart;
  trash = faTrash;
  @Input() product: Product;
  constructor(public router: Router, private store: Store) {}

  public openProductDetail(id: string): void {
    this.router.navigate(['details', id]);
  }

  public removeProduct(product:Product):void{
    this.store.dispatch(removeProduct({id:product.id}))
  }
}
