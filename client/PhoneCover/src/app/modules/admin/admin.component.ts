import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Product } from 'src/app/core/models/product';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { EditvaluesService } from 'src/app/core/services/editvalues.service';
import { LocalService } from 'src/app/core/services/local.service';
import { CategoriesapiService } from 'src/app/core/services/categoriesapi.service';
import { Category } from 'src/app/core/models/category';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  all: Product[] = [];
  products: Product[] = [];
  searchProducts: Product[] = [];
  showsearch: boolean = false;
  categories: Category[] = [];
  types: Product[] = [];
  allTypes: Category[] = [];
  sortedTypes: Product[] = [];
  dialogTheme2: boolean;
  categoryForms: FormGroup;
  category: Category;



  constructor(
    public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private productApi: ProductapiService,
    private editService: EditvaluesService,
    private router: Router,
    private local: LocalService,
    private categoryApi: CategoriesapiService
  ) { }


  openEdit(id, name, description, type, category, price, photoUrl) {
    this.editService.passValues(id, name, description, type, category, price, photoUrl);
    this.router.navigate(['productEdit'])
  }

  delete(id) {
    this.productApi.deleteProduct(id).subscribe(ele => {
      this.products = this.products.filter(ele => ele.id != id);
      this.searchProducts = this.products.filter(ele => ele.id != id);
    });
  }

  searchProduct(name) {
    this.searchProducts = [];
    if (name == "") {
      this.showsearch = false;
      this.searchProducts = [];
    }
    else {
      this.showsearch = true;
      let filter = name.toUpperCase();
      for (let i = 0; i < this.products.length; i++) {
        let temp = this.products[i].name;
        if (temp.toUpperCase().indexOf(filter) > -1) {
          this.searchProducts.push(this.products[i]);
        }
      }
    }
  }


  sortById() {
    this.products.sort(function (a, b) {
      return (a.id - b.id);
    }).sort(function (a, b) {
      return (a.id - b.id);
    });
    this.searchProducts.sort(function (a, b) {
      return (a.id - b.id);
    }).sort(function (a, b) {
      return (a.id - b.id);
    });
  }

  sortByName() {
    this.products.forEach(element => {
      element.name = element.name.replace(/\s+/g, '');
    });
    this.products.sort((a, b) => a.name.localeCompare(b.name));
    this.searchProducts.forEach(element => {
      element.name = element.name.replace(/\s+/g, '');
    });
    this.searchProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByCategory() {
    this.products.forEach(element => {
      element.category = element.category.replace(/\s+/g, '');
    });
    this.searchProducts.forEach(element => {
      element.category = element.category.replace(/\s+/g, '');
    });
    this.products.sort((a, b) => a.category.localeCompare(b.category));
    this.searchProducts.sort((a, b) => a.category.localeCompare(b.category));

  }

  sortByType() {
    this.products.sort((a, b) => a.type.localeCompare(b.type));
    this.searchProducts.sort((a, b) => a.type.localeCompare(b.type));
  }

  priceToHigh() {
    this.products.sort(function (a, b) {
      return (a.price - b.price);
    }).sort(function (a, b) {
      return (a.price - b.price);
    });
    this.searchProducts.sort(function (a, b) {
      return (a.price - b.price);
    }).sort(function (a, b) {
      return (a.price - b.price);
    });
  }

  priceToLow() {
    this.products.sort(function (a, b) {
      return (b.price - a.price);
    }).sort(function (a, b) {
      return (b.price - a.price);
    });
    this.searchProducts.sort(function (a, b) {
      return (b.price - a.price);
    }).sort(function (a, b) {
      return (b.price - a.price);
    });
  }

  showAll() {
    this.products = this.all;

  }

  categoryFilter(c) {
    this.showAll();
    this.products = this.products.filter(i => c.includes(i.category));
    this.sortedTypes = this.types.filter(type => type.category == c);


  }

  TypeFilter(t) {
    console.log(t)
    this.showAll();
    this.products = this.products.filter(i => t.includes(i.type));
  }

  reduiceCategory(){
    this.categories = this.products.reduce((acc, current) => {
      const x = acc.find(item => item.category === current.category);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

  }

  reduiceType() {
    this.types = this.products.reduce((acc, current) => {
      const x = acc.find(item => item.type === current.type);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    this.allTypes = this.products.reduce((acc, current) => {
      const x = acc.find(item => item.type === current.type);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
  }

  checkDialogTheme() {
    if (this.local.dialogTheme == true) {
      this.dialogTheme2 = true;
    } else {
      this.dialogTheme2 = false;
    }
  }

  addCategory1(f) {
    this.category = {
      category: f.form.value.category,
      type: f.form.value.type

    }

    this.categoryApi.addCategory(this.category).subscribe(ele => {
      this.categoryApi.getAll().subscribe(ele => {
        ele.forEach(element => {
        this.categories.push(element);
        });
      });
    }
    )
  }

  getCategories() {
    this.categoryApi.getAll().subscribe(ele => {
      ele.forEach(element => {
        this.categories.push(element);
        this.allTypes.push(element);
      });
      this.reduiceCategory();
    });
   

  }
  deleteCategory(id) {
    this.categoryApi.deleteCategory(id).subscribe((ele: Category) => {
      this.categories = this.categories.filter(ele => ele.id != id);
    })
  }


  ngOnInit(): void {
    this.categoryForms = this.fb.group({
      category: ["", Validators.required],
      type: ["", Validators.required]


    });
    this.productApi.getAll().subscribe(ele => {
      this.products = ele;
      this.all = ele;

      
      

      this.sortById();
      this.reduiceType();
      this.getCategories();

    })
  }
}