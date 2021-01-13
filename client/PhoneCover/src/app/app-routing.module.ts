import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home/order/:id',
    loadChildren: () => import('src/app/modules/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'home/home/order/:id',
    loadChildren: () => import('src/app/modules/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('src/app/modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'showProduct',
    loadChildren: () => import('src/app/modules/showProduct/show-modules.module').then(m => m.ShowModulesModule)
  },
  {
    path: 'showProduct/:category/:type',
    loadChildren: () => import('src/app/modules/showProduct/show-modules.module').then(m => m.ShowModulesModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('src/app/modules/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'showProduct/:category/:type/order/:id',
    loadChildren: () => import('src/app/modules/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'cart/order/:id/:quantity',
    loadChildren: () => import('src/app/modules/order/order.module').then(m => m.OrderModule)
  },
  {
    path: 'history',
    loadChildren: () => import('src/app/modules/history/history.module').then(m => m.HistoryModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }