import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductAddComponent} from "./pages/product/product-add/product-add.component";
import {ProductListComponent} from "./pages/product/product-list/product-list.component";
import {ProductGroupAddComponent} from "./pages/product-group/product-group-add/product-group-add.component";
import {ProductGroupListComponent} from "./pages/product-group/product-group-list/product-group-list.component";
import {ProductEditComponent} from "./pages/product/product-edit/product-edit.component";
import {ProductGroupEditComponent} from "./pages/product-group/product-group-edit/product-group-edit.component";
import {CustomerAddComponent} from "./pages/customer/customer-add/customer-add.component";
import {CustomerEditComponent} from "./pages/customer/customer-edit/customer-edit.component";
import {CustomerListComponent} from "./pages/customer/customer-list/customer-list.component";

const routes: Routes = [

  {
    path: 'product/add',
    component: ProductAddComponent,
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent,
  },
  {
    path: 'product/list',
    component: ProductListComponent,
  },

  {
    path: "product-group/add",
    component: ProductGroupAddComponent,
  },
  {
    path:"product-group/edit/:id",
    component: ProductGroupEditComponent,

  },
  {
    path: "product-group/list",
    component: ProductGroupListComponent,
  },
  {
    path: "customer/add",
    component: CustomerAddComponent
  },
  {
    path: "customer/edit/:id",
    component: CustomerEditComponent
  },
  {
    path: "customer/list",
    component: CustomerListComponent
  },
  {
    path :'**',
    redirectTo: 'product/list'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
