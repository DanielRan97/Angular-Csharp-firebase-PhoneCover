import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { Product } from 'src/app/core/models/product';
import { LocalService } from 'src/app/core/services/local.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.scss']
})
export class ShowproductComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private router:Router,private productApi:ProductapiService,private local:LocalService,private toastrService: NbToastrService) { }
  TypePath:string;
  TypePath1:string;
  products:Product[]=[];
  filterProduct:Product[]=[];
  toCart:Product[]=[];
  private index: number = 0;
  urlError:string="https://static.coverscart.com/image/cache/data/Golden_Mandala_Back_Case_for_Oppo_F5-600x600.jpg"


  @HostBinding('class')
  classes = 'example-items-rows';

  addToCart(id,name,category,type,price,photoUrl){
      this.toCart.push({id:id,name:name,category:category,type:type,price:price,photoUrl:photoUrl});
      this.local.saveCoverToStorage(this.toCart);
      this.showToast('top-right', 'success' , name);
  }

 

  showToast(position, status ,name) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      ` ${name} Added to cart`,
      { position, status });
  }


  getFromStorage(){
    if(localStorage.getItem('coverPhoneProjectCoverToCart')){

      this.toCart = JSON.parse(localStorage.getItem('coverPhoneProjectCoverToCart'));
      
    }
  
  }
 
 
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.TypePath = params.type;
      this.TypePath1 = params.category;
    })
    if(!this.TypePath){
      this.router.navigate(['home']);
    }
    this.productApi.getAll().subscribe(ele => {
      this.products = ele;
      this.products.forEach(element => {
        if(element.type==this.TypePath){
          this.filterProduct.push(element);
        }
      });
  })
  this.getFromStorage();
 }
}
