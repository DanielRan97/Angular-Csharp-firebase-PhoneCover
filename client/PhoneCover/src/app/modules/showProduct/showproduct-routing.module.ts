import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductComponent } from './showproduct.component';





const routes: Routes = [
  {path: '' , component: ShowproductComponent, pathMatch : 'full'},
  {path: 'showProduct' , component: ShowproductComponent},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowProductRoutingModule { }
