import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing-module';
import { NebularModule } from 'src/app/nebular/nebular.module';



@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    NebularModule
  ]
})
export class HistoryModule { }
