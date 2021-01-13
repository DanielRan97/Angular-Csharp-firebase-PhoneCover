import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { AddproductComponent } from './addProduct/addproduct.component';
import { EditproductComponent } from './editProducr/editproduct.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';
import { AdminorderComponent } from './adminorder/adminorder.component';
import { EditorderComponent } from './adminorder/editorder/editorder.component';
import { NoPremissionsComponent } from './no-premissions/no-premissions.component';
import { ManagerComponent } from './manager-zone/manager/manager.component';



const routes: Routes = [
  {path: '' , component: AdminComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'admin' , component: AdminComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'productEdit' , component: EditproductComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'add' , component: AddproductComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'editOrder' , component: EditorderComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'mainAdmin' , component: MainadminComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'mainOrder' , component: AdminorderComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'manager' , component: ManagerComponent, pathMatch : 'full', canActivate: [AuthGuard]},
  {path: 'noPremission' , component: NoPremissionsComponent, pathMatch : 'full'}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
