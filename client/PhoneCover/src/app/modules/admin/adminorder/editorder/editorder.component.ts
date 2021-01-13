import { Component, OnInit } from '@angular/core';
import { EditvaluesService } from 'src/app/core/services/editvalues.service';
import { Order } from 'src/app/core/models/order';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { OrderapiService } from 'src/app/core/services/orderapi.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.scss']
})
export class EditorderComponent implements OnInit {

  orders:Order[]=[];
  OrdersForms:FormGroup;
  order:Order;
 

  constructor(private location: Location,private router:Router,private orderValues:EditvaluesService,private formBuilder:FormBuilder,private orderService:OrderapiService) { }

  getValues(){
    this.orders=[];
    this.orders = this.orderValues.ordersValues;
  if(this.orders[0]==undefined){
   this.back();
  }
   
  }

  back() {
    this.location.back(); 
  }

  save(f){
  this.orders.forEach(element => {
    this.order = {
      id:element.id,
      name:f.form.value.name ,
      email:f.form.value.email,
      phone:f.form.value.phone,
      city:f.form.value.city,
      address:f.form.value.address,
      shipping:element.shipping,
      price:element.price,
      shippingStatus:f.form.value.shippingStatus,
      remark:f.form.value.remark,
      date:element.date
    }
    this.orderService.editOrder(this.order,element.id).subscribe(ele => {
     this.back();  
  });
  });


  }

  

  ngOnInit(): void {
    this.getValues();
    this.orders.forEach(element => {
      this.OrdersForms = this.formBuilder.group({
        name: [element.name, Validators.required],
        email: [element.email],
        phone: [element.phone],
        city: [element.city, Validators.required],
        address: [element.address, Validators.required],
        shippingStatus: ["", Validators.required],
        remark: [element.remark ],
        
      }
    )}
    
    )}
}
