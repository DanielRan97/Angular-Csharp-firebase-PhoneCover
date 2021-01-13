import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(`${environment.orderApi}/${id}`)
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.orderApi);
  }

  addOrder(Order: Order) {
    return this.http.post(environment.orderApi, Order)
  }

  editOrder(newParams,id) {
    return this.http.put(`${environment.orderApi}${id}`, newParams)
  }

  deleteOrder(id) {
    return this.http.delete(`${environment.orderApi}` + id)
  }

}
