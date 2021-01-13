import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { LocalService } from 'src/app/core/services/local.service';
import { ProductapiService } from 'src/app/core/services/productapi.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  
  history:Product[]=[];


  constructor(private local:LocalService,private productApi:ProductapiService) { }

  getAll(){

      if (localStorage.getItem('coverPhoneProjectToHistory')) {
       return this.history = JSON.parse(localStorage.getItem('coverPhoneProjectToHistory'));
     
        
       } 
      }

      remove1(id){
        for (let i = 0; i < this.history.length; i++) {
          if (this.history[i].id == id) {
            this.history.splice(i, 1);
            this.local.saveHistoryToStorage(this.history);
            break;
          }
        }
      }



  ngOnInit(): void {
    this.getAll();
    
  }

}
