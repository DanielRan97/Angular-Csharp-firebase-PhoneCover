import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private http: HttpClient) { }
  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.productsApi}/${id}`)
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.productsApi);
  }

  addProduct(Product: Product) {
    return this.http.post(environment.productsApi, Product)
  }

  editProduct(newParams,id) {
    return this.http.put(`${environment.productsApi}${id}`, newParams)
  }

  deleteProduct(id) {
    return this.http.delete(`${environment.productsApi}` + id)
  }

}
