import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/core/services/local.service';
import { Product } from 'src/app/core/models/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Product[] = [];


  constructor(private local: LocalService) { }




  getFromStorage() {
    if (localStorage.getItem('coverPhoneProjectCoverToCart')) {

      this.cart = JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));

    }

  }


  remove1(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id == id) {
        this.cart.splice(i, 1);
        this.local.saveCoverToStorage(this.cart);
        break;
      }
    }
  }

  ngOnInit(): void {
    this.getFromStorage();


  }

}
