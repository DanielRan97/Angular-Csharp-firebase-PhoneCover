import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowproductComponent } from './showproduct.component';
import { ShowProductRoutingModule } from './showproduct-routing.module';
import { NebularModule } from 'src/app/nebular/nebular.module';
import { NbToastrModule} from '@nebular/theme';

@NgModule({
  declarations: [ShowproductComponent],
  imports: [
    CommonModule,
    ShowProductRoutingModule,
    NebularModule,
    NbToastrModule.forRoot()

  ]
})
export class ShowModulesModule { }
