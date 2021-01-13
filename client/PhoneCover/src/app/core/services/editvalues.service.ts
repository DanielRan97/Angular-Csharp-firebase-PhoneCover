import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class EditvaluesService {

  productValues:Product[]=[];
  ordersValues:Order[]=[];

  constructor() { }

  passValues1(id,name,email,phone,city,address,shipping,price,shippingStatus,remark,date){
    this.ordersValues=[];
    this.ordersValues.push({id:id,name:name,email:email,phone:phone,city:city,address:address,shipping:shipping,price:price,shippingStatus:shippingStatus,remark:remark,date:date});
  }

  passValues(id,name,description,category,type,price,photoUrl){
    this.productValues=[];
    this.productValues.push({id:id,name:name,description:description,category:category,type:type,price:price,photoUrl:photoUrl});
  }
}
