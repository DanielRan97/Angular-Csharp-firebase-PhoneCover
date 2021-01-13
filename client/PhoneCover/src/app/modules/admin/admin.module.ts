import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing-module';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { AddproductComponent } from './addProduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editProducr/editproduct.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';
import { AdminorderComponent } from './adminorder/adminorder.component';
import { EditorderComponent } from './adminorder/editorder/editorder.component';
import { AdminnewsComponent } from './adminNewsLetter/adminnews.component';
import { NoPremissionsComponent } from './no-premissions/no-premissions.component';
import { ManagerComponent } from './manager-zone/manager/manager.component';



@NgModule({
  declarations: [AdminComponent, AddproductComponent, EditproductComponent, MainadminComponent, AdminorderComponent, EditorderComponent, AdminnewsComponent, NoPremissionsComponent, ManagerComponent],
  imports: [CommonModule,AdminRoutingModule,NebularModule,FormsModule,ReactiveFormsModule],
  providers: [AdminComponent]
})
export class AdminModule { }
