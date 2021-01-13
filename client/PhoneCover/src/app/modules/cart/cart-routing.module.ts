import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { OrdercartComponent } from './orderCart/ordercart.component';



const routes: Routes = [
  {path: '' , component: CartComponent, pathMatch : 'full'},
  {path: 'cart' , component: CartComponent},
  {path: 'cartOrder' , component: OrdercartComponent},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
