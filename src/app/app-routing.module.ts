import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { FormProductComponent } from './page/form-product/form-product.component';

const routes: Routes = [
  {path:'home', component: HomeComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'form', component: FormProductComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
