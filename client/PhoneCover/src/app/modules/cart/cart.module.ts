import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { OrdercartComponent } from './orderCart/ordercart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CartComponent, OrdercartComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    NebularModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
