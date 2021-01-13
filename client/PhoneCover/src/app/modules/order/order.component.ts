import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { Product } from 'src/app/core/models/product';
import { OrderapiService } from 'src/app/core/services/orderapi.service';
import { OrderitemService } from 'src/app/core/services/orderitem.service';
import { Orderitem } from 'src/app/core/models/orderitem';
import {Location} from '@angular/common';
import { LocalService } from 'src/app/core/services/local.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  TypePath:number;
  OrderForms:FormGroup;
  order:Order;
  date:Date = new Date();
  Products:Product[]=[];
  dateString:string;
  orderComplete:string;
  orderItem:Orderitem;
  history:Product[]=[];

  constructor(private _location: Location,private local:LocalService,private formBuilder:FormBuilder,private orderitemService:OrderitemService,private orderApi:OrderapiService,private router:Router,private productApi:ProductapiService,private activeRoute:ActivatedRoute) { }



  orderNow(f){
    this.Products.forEach(element => {
      // this.dateString = this.date.toLocaleDateString();
      this.order = {
        name: f.form.value.name,
        email: f.form.value.email,
        phone: f.form.value.phone,
        city: f.form.value.city,
        address: f.form.value.address,
        shipping: f.form.value.shipping,
        // itemId: this.TypePath,
        price:element.price ,
        shippingStatus:"Not sent",
        remark: f.form.value.remark,
        date: String(new Date())
    }
    this.orderApi.addOrder(this.order).subscribe((ele:Order) => {
      this.orderComplete = "The order was completed successfully";
      this.orderItem = {
        orderId: ele.id,
        productId:this.TypePath,
        quantity:f.form.value.quantity,
        productPrice:ele.price
    
        }
        this.orderitemService.addOrderItem(this.orderItem).subscribe(ele => {
          this.history.push(element);
          this.local.saveHistoryToStorage(this.history);
          setTimeout(() => {
            this.router.navigate(['/home']);
            }, 3000);
        })
    })
  });
 
}

backClicked() {
  this._location.back();
}

  ngOnInit(): void {
     this.activeRoute.params.subscribe(params => {
      this.TypePath = params.id;
    })
    this.OrderForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      phone: [''],
      city: ['', Validators.required],
      address: ['', Validators.required],
      shipping: ['', Validators.required],
      quantity: ['', Validators.required],
      remark: [''],
     
      

    });
    this.productApi.getAll().subscribe(ele => {
      ele.forEach(element => {
        if(element.id == this.TypePath){
          this.Products.push(element)
        
          
        }
      });
      
  })
  
  if (localStorage.getItem('coverPhoneProjectToHistory')) {
    this.history = JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'));
  }
}

}
