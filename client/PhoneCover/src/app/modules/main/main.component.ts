import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { LocalService } from 'src/app/core/services/local.service';
import { ChangeDetectorRef } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductapiService } from 'src/app/core/services/productapi.service';
import { NbMenuItem } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/core/models/news';
import { NewsapiService } from 'src/app/core/services/newsapi.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any[] = [];
  categories: string[] = [];
  phoneType: object[] = [];
  newsLetterForms: FormGroup;
  news: News;
  newsLetterDone: boolean = false;
  newsLetter: News[] = [];
  emailAlredy: string;
  emails:string[]=[];
  dialogTheme2:boolean;


  constructor(private newsService: NewsapiService, private formBuilder: FormBuilder, private sidebarService: NbSidebarService, private productApi: ProductapiService, public themeService: NbThemeService, private local: LocalService, private cdref: ChangeDetectorRef) { }

  toggle() {
    this.sidebarService.toggle();
  }

  darkTheme() {
    this.themeService.changeTheme('dark');
    this.local.saveObjToStorage("dark");
    this.local.dialogTheme = true;
    this.dialogTheme2 = true;
  }

  lightTheme() {
    this.themeService.changeTheme('default');
    this.local.removeObjFromStorage();
    this.local.dialogTheme = false;
    this.dialogTheme2 = false;
  }

  startingTheme() {
    if (this.local.getObjFromStorage()) {
      this.themeService.changeTheme('dark');
      this.dialogTheme2 = true;
      this.local.dialogTheme = true;
    }
    else {
      this.themeService.changeTheme('default');
      this.dialogTheme2 = false;
      this.local.dialogTheme = false;
    }
  }

 

  getNewsLetter() {
    this.newsService.getAll().subscribe(ele => {
      this.newsLetter = ele;
      this.newsLetter.forEach(element => {
        this.emails.push(element.email.toString())
        
      });
    })
    
  }

  reduiceType() {
    this.phoneType = this.products.reduce((acc, current) => {
      const x = acc.find(item => item.type === current.type);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
  }

  refresh(): void {

    setTimeout(function () { window.location.reload(); }, 500);
  }


  add(f) {

    this.news = {
      name: f.form.value.name,
      email: f.form.value.email

    }
    if (this.emails.includes(f.form.value.email)) {
      this.emailAlredy = "The email alredy in use"
    }
    else {
      this.newsService.addNews(this.news).subscribe(ele => {
        this.newsLetterDone = true;

      });
    }

  }


  newsClear() {
    this.newsLetterForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],


    });
    this.emailAlredy = "";
    this.newsLetterDone = false;
  }

  ngOnInit(): void {
    this.newsLetterForms = this.formBuilder.group({
      name: ['', Validators.required],
      email: [''],


    });
    this.startingTheme();
    this.productApi.getAll().subscribe(ele => {
      ele.forEach(element => {
        this.products.push({ category: element.category, type: element.type })
      });
      ele.forEach(element => {
        element.category = element.category.replace(/\s+/g, '');
        this.categories.push(element.category);
        this.categories = this.categories.filter((el, i, a) => i === a.indexOf(el));
      });
      this.reduiceType();
      this.getNewsLetter();
    }
    )
  }

  

  ngAfterViewInit() {
    this.toggle();
    this.cdref.detectChanges();

  }

}
