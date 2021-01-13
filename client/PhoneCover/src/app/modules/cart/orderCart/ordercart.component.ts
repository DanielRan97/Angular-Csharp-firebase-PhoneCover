import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { Product } from 'src/app/core/models/product';
import { OrderapiService } from 'src/app/core/services/orderapi.service';
import { OrderitemService } from 'src/app/core/services/orderitem.service';
import { Orderitem } from 'src/app/core/models/orderitem';
import { Location } from '@angular/common';
import { LocalService } from 'src/app/core/services/local.service';


@Component({
  selector: 'app-ordercart',
  templateUrl: './ordercart.component.html',
  styleUrls: ['./ordercart.component.scss']
})
export class OrdercartComponent implements OnInit {

  constructor(private _location: Location,
    private formBuilder: FormBuilder,
    private orderitemService: OrderitemService,
    private orderApi: OrderapiService,
    private router: Router,
    private local: LocalService
  ) { }

  OrderForms: FormGroup;
  order: Order;
  date: Date = new Date();
  dateString: string;
  orderComplete: string;
  orderItem: Orderitem;
  cart: Product[] = [];
  orderPrice: number = 0;
  history: Product[] = [];

  orderNow(f) {
    this.order = {
      name: f.form.value.name,
      email: f.form.value.email,
      phone: f.form.value.phone,
      city: f.form.value.city,
      address: f.form.value.address,
      shipping: f.form.value.shipping,
      price: this.orderPrice,
      shippingStatus: "Not sent",
      remark: f.form.value.remark,
      date: String(new Date())
    }
    this.orderApi.addOrder(this.order).subscribe((ele: Order) => {
      if (ele) {
        this.sendOrderItems(ele).then((data) => {
          this.orderComplete = "The order was completed successfully";
          this.cart.forEach(element => {
            this.history.push(element);
            this.local.saveHistoryToStorage(this.history);
          });
          this.cart.forEach(element => {
            this.local.removeCoverFromStorage();
          });
          setTimeout(() => {
            this.router.navigate(['cart']);
          }, 3000);
        })
      }
    })
  }

  async sendOrderItems(order: Order) {

    let res = [];
    for (let index = 0; index < this.cart.length; index++) {
      const element = this.cart[index];
      this.orderItem = {
        orderId: order.id,
        productId: element.id,
        quantity: 1,
        productPrice: element.price
      }
      res[index] = await this.orderitemService.addOrderItems(this.orderItem);
    }

    return 'finish';
  }


  getFromStorage() {
    if (localStorage.getItem('coverPhoneProjectCoverToCart')) {

      this.cart = JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));
      this.cart.forEach(ele => {
        this.orderPrice += ele.price;
      })

    }

  }

  backClicked() {
    this._location.back();
  }


  ngOnInit(): void {
    this.getFromStorage();
    this.OrderForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],
      phone: [''],
      city: ['', Validators.required],
      address: ['', Validators.required],
      shipping: ['', Validators.required],
      remark: [''],



    });

    if (localStorage.getItem('coverPhoneProjectToHistory')) {
      this.history = JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'));


    }
  
  }

}