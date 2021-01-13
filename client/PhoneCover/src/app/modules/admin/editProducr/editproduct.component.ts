import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { Product } from 'src/app/core/models/product';
import { Router } from '@angular/router';
import { EditvaluesService } from 'src/app/core/services/editvalues.service';
import { Category } from 'src/app/core/models/category';
import { CategoriesapiService } from 'src/app/core/services/categoriesapi.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {

  addProductForms:FormGroup;
  onlyImage:string;
  product:Product;
  productValues:Product[];
  categories:Category[]=[];
  onlyCategory:string[]=[];
  products:Product[]=[];
  type:string;
  

  constructor(private formBuilder:FormBuilder,private productService:ProductapiService,private router:Router,
              private editService:EditvaluesService,private categoryApi:CategoriesapiService) { }
  
  checkImage(img,f){
    var str = img;
    var res = str.substring(0, 8);
    res == "https://"? this.add(f):this.onlyImage="Only image link";

  }

  getValues(){
    this.productValues=[];
    this.productValues = this.editService.productValues;
    if(this.productValues[0]==undefined){
      this.router.navigate(['admin'])
    }
  
  }

  add(f) {
    this.productValues.forEach(element => {
      this.product = {
        id:element.id,
        name: f.form.value.name,
        description: f.form.value.description,
        category: f.form.value.category,
        type: f.form.value.type,
        price: f.form.value.price,
        photoUrl: f.form.value.photoUrl
      }
      this.productService.editProduct(this.product,element.id).subscribe(ele => {
        this.router.navigate(['mainAdmin']);  
    });
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
    this.getValues();
    this.productValues.forEach(ele => {
      this.addProductForms = this.formBuilder.group({
        name: [ele.name, Validators.required],
        category: ["", Validators.required],
        type: ["", Validators.required],
        description: [ele.description],
        price: [ele.price, Validators.required],
        photoUrl: [ele.photoUrl]
        
    });})
    this.productService.getAll().subscribe(ele => {
      this.products = ele;
      this.getCategories();
    })
  }

   
} 

