import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  public getProductDetails(id: string): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }

  public getMen(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products/category/men's%20clothing`
    );
  }
  public getWomen(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products/category/women's%20clothing`
    );
  }

  public getJewelery(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://fakestoreapi.com/products/category/jewelery'
    );
  }

  public getElectronics(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://fakestoreapi.com/products/category/electronics'
    );
  }
}
