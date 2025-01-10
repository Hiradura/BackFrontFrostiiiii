import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:"navbar", component:NavbarComponent},
  {path:"pages", component:PagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
