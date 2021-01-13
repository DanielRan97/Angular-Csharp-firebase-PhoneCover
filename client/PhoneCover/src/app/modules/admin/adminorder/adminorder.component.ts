import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderapiService } from 'src/app/core/services/orderapi.service';
import { EditvaluesService } from 'src/app/core/services/editvalues.service';
import { Router } from '@angular/router';
import { Orderitem } from 'src/app/core/models/orderitem';
import { OrderitemService } from 'src/app/core/services/orderitem.service';



@Component({
  selector: 'app-adminorder',
  templateUrl: './adminorder.component.html',
  styleUrls: ['./adminorder.component.scss']
})
export class AdminorderComponent implements OnInit {

  orders: Order[] = [];
  orderItems: Orderitem[] = [];
  orderItemsFilter: Orderitem[] = [];
  searchOrder: Order[] = [];
  showsearch: boolean = false;

  constructor(private orderApi: OrderapiService, private editService: EditvaluesService, private router: Router, private orderItemsApi: OrderitemService) { }

  delete(id) {
    this.orderApi.deleteOrder(id).subscribe((ele: Order) => {
      this.deleteOrderItems(ele).then(data => {
        this.orders = this.orders.filter(ele => ele.id != id);
      })
    });
  }

  searchOrders(name) {
    this.searchOrder = [];
    if (name == "") {
      this.showsearch = false;
      this.searchOrder = [];
    }
    else {
      this.showsearch = true;
      let filter = name.toUpperCase();


      for (let i = 0; i < this.orders.length; i++) {
        let temp = this.orders[i].name;
        if (temp.toUpperCase().indexOf(filter) > -1) {
          this.searchOrder.push(this.orders[i]);
        }
      }
    }
  }

  searchOrdersByEmail(email) {
    this.searchOrder = [];
    if (email == "") {
      this.showsearch = false;
      this.searchOrder = [];
    }
    else {
      this.showsearch = true;
      let filter = email.toUpperCase();


      for (let i = 0; i < this.orders.length; i++) {
        let temp = this.orders[i].email;
        if (temp.toUpperCase().indexOf(filter) > -1) {
          this.searchOrder.push(this.orders[i]);
        }
      }
    }
  }

  getOrder(id: number) {
    this.orderItemsFilter = [];
    this.orderItems.forEach(element => {
      if (element.orderId == id) {
        this.orderItemsFilter.push(element);

      }

    });


  }

  async deleteOrderItems(order: Order) {
    let orderItemsToDelete = this.orderItems.filter(ele => ele.orderId == order.id)
    let res = [];

    for (let index = 0; index < orderItemsToDelete.length; index++) {
      const element = orderItemsToDelete[index];
      res[index] = await this.orderItemsApi.deleteOrderItems(element.id)
    }
    return 'finish';
  }

  edit(id, name, email, phone, city, address, shipping, price, shippingStatus, remark, date) {
    this.editService.passValues1(id, name, email, phone, city, address, shipping, price, shippingStatus, remark, date);
    this.router.navigate(['/editOrder'])
  }

  sortById() {
    this.orders.sort(function (a, b) {
      return (a.id - b.id);
    }).sort(function (a, b) {
      return (a.id - b.id);
    });
    this.searchOrder.sort(function (a, b) {
      return (a.id - b.id);
    }).sort(function (a, b) {
      return (a.id - b.id);
    });
  }

  sortByName() {
    this.orders.forEach(element => {
      element.name = element.name.replace(/\s+/g, '');
    });
    this.orders.sort((a, b) => a.name.localeCompare(b.name));
    this.searchOrder.forEach(element => {
      element.name = element.name.replace(/\s+/g, '');
    });
    this.searchOrder.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByEmail() {
    this.orders.forEach(element => {
      element.email = element.email.replace(/\s+/g, '');
    });
    this.orders.sort((a, b) => a.email.localeCompare(b.email.toString()));
    this.searchOrder.forEach(element => {
      element.email = element.email.replace(/\s+/g, '');
    });
    this.searchOrder.sort((a, b) => a.email.localeCompare(b.email.toString()));

  }

  sortByCity() {
    this.orders.forEach(element => {
      element.city = element.city.replace(/\s+/g, '');
    });
    this.orders.sort((a, b) => a.city.localeCompare(b.city));
    this.searchOrder.forEach(element => {
      element.city = element.city.replace(/\s+/g, '');
    });
    this.searchOrder.sort((a, b) => a.city.localeCompare(b.city));
  }

  priceToHigh() {
    this.orders.sort(function (a, b) {
      return (a.price - b.price);
    }).sort(function (a, b) {
      return (a.price - b.price);
    });
    this.searchOrder.sort(function (a, b) {
      return (a.price - b.price);
    }).sort(function (a, b) {
      return (a.price - b.price);
    });
  }




  priceToLow() {
    this.orders.sort(function (a, b) {
      return (b.price - a.price);
    }).sort(function (a, b) {
      return (b.price - a.price);
    });
    this.searchOrder.sort(function (a, b) {
      return (b.price - a.price);
    }).sort(function (a, b) {
      return (b.price - a.price);
    });
  }

  ngOnInit(): void {
    this.orders.forEach(element => {
      this.orderItemsApi.getAllOrderItemsByOrderId(element.id).subscribe(res => {


      })

    });

    this.orderApi.getAll().subscribe(ele => {
      this.orders = ele;
    })

    this.orderItemsApi.getAll().subscribe(ele => {
      this.orderItems = ele;

    })

  }

}
