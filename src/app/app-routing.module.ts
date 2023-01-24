import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:'home', component: HomeComponent,  ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent, ...canActivate(()=>redirectUnauthorizedTo(['/login']))},
  {path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
