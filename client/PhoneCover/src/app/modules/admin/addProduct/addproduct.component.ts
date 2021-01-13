import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { Product } from 'src/app/core/models/product';
import { Router } from '@angular/router';
import { CategoriesapiService } from 'src/app/core/services/categoriesapi.service';
import { Category } from 'src/app/core/models/category';




@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  addProductForms:FormGroup;
  onlyImage:string;
  product:Product;
  products:Product[]=[];
  categories:Category[]=[];
  onlyCategory:string[]=[];
 
  
  constructor(private formBuilder:FormBuilder,private productService:ProductapiService,private router:Router,private categoryApi:CategoriesapiService) { }
  
  checkImage(img,f){
    var str = img;
    var res = str.substring(0, 8);
    res == "https://"? this.add(f):this.onlyImage="Only image link";
  
    
  }

  add(f) {
    this.product = {
      name: f.form.value.name,
      description: f.form.value.description,
      category: f.form.value.category,
      type: f.form.value.type,
      price: f.form.value.price,
      photoUrl: f.form.value.photoUrl
    }
    this.productService.addProduct(this.product).subscribe(ele => {
      this.router.navigate(['mainAdmin'])
    
  });
    
    

}


getCategories(){
  this.categoryApi.getAll().subscribe(ele => {
    ele.forEach(element => {
      this.onlyCategory.push(element.category);
      this.onlyCategory = this.onlyCategory.filter((el, i, a) => i === a.indexOf(el));
    });
  })
}

checkTypes(category){
  this.categories = [];
  this.categoryApi.getAll().subscribe(ele => {
    ele.forEach(element => {
      this.categories.push(element);
      this.categories = this.categories.filter(ele => ele.category == category);
    });
  })
     
      
    }

  


  
  ngOnInit(): void {
    this.addProductForms = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      photoUrl: ['']

    });
    this.productService.getAll().subscribe(ele => {
      this.products = ele;
      this.getCategories();
     
    })
    
    
    
  }
  
}
