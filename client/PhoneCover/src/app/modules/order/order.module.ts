import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    NebularModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  
  
  ]
})
export class OrderModule { }
