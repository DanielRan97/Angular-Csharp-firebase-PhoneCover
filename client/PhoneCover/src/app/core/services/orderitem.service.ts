import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orderitem } from '../models/orderitem';


@Injectable({
  providedIn: 'root'
})
export class OrderitemService {

  constructor(private http: HttpClient) { }
  getById(id: number): Observable<Orderitem> {
    return this.http.get<Orderitem>(`${environment.OrderItemApi}/${id}`)
  }

  getAll(): Observable<Orderitem[]> {
    return this.http.get<Orderitem[]>(environment.OrderItemApi);
  }

  
  getAllOrderItemsByOrderId(orderId): Observable<Orderitem[]> {
    return this.http.get<Orderitem[]>(environment.OrderItemApi+ '?orderId=' + orderId);
  }

  addOrderItem(OrderItem: Orderitem) {
    return this.http.post(environment.OrderItemApi, OrderItem)
  }

   addOrderItems(OrderItem: Orderitem) {
    return this.http.post(environment.OrderItemApi, OrderItem).toPromise()
  }


  editOrderItem(newParams,id) {
    return this.http.put(`${environment.OrderItemApi}${id}`, newParams)
  }

  deleteOrderItem(id) {
    return this.http.delete(`${environment.OrderItemApi}` + id)
  }

  deleteOrderItems(id) {
    return this.http.delete(`${environment.OrderItemApi}` + id).toPromise()
  }


}
