import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { LocalService } from 'src/app/core/services/local.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  products:Product[]=[];
  trending:Product[]=[];
  toCart:Product[]=[];
  urlError:string="https://static.coverscart.com/image/cache/data/Golden_Mandala_Back_Case_for_Oppo_F5-600x600.jpg"
  private index: number = 0;
  p: number = 1;
  
  constructor(private productApi:ProductapiService,private local:LocalService,private toastrService: NbToastrService) { }

  loadDefaultPhoto(i){
    this.products[i].photoUrl = this.urlError;
  }
  getAll(){
    this.productApi.getAll().subscribe(ele => {
      this.products = ele;  
     
  }) 
}

trend(){
  this.productApi.getAll().subscribe(ele => {
    ele.forEach(element => {
      if(element.name.length < 10){
        this.trending.push(element);
      }
    });
  })

}

addToCart(id,name,category,type,price,photoUrl){
  this.toCart.push({id:id,name:name,category:category,type:type,price:price,photoUrl:photoUrl});
  this.local.saveCoverToStorage(this.toCart);
  this.showToast('top-right', 'success' , name);
}
showToast(position, status ,name) {
  this.index += 1;
  this.toastrService.show(
    status || 'success',
    ` ${name} Added to cart`,
    { position, status });
}

getFromStorage(){
  if(localStorage.getItem('coverPhoneProjectCoverToCart')){

    this.toCart = JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));
    
  }

}


  ngOnInit(): void {
   this.getAll();
   this.trend();
   this.getFromStorage();

}



}