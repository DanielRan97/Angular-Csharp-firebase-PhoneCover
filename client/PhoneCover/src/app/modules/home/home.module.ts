import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { NbToastrModule} from '@nebular/theme';
import {NgxPaginationModule} from 'ngx-pagination'; 


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NebularModule,
    NbToastrModule,
    NgxPaginationModule
  ]
})
export class HomeModule { }
