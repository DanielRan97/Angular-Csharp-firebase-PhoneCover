import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { UserResolver } from 'src/app/core/services/user.resolver';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';



const routes: Routes = [
  {path: '' , component: LoginComponent, pathMatch : 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'profile' , component: ProfileComponent, resolve: {data:UserResolver}},
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
