import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './Constant/constant';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  samplleSub=new Subject();

 private apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient){

  }
  getCategory(){
    return this.http.get('/assets/Allcategory.json');
  }
  getProducts(): Observable<any>{
    return this.http.get(`${this.apiUrl}/products`);
  }
  getProductsByCategory(categoryId:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/products?categoryId=${categoryId}`);
  }
  saveProduct(product: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/products`, product)
  }
  updateProduct(product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/products/${product.id}`, product);
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/products/${id}`)
  }

}

