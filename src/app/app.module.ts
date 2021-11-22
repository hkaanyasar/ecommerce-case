import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductAddComponent } from './pages/product/product-add/product-add.component';
import { CustomerListComponent } from './pages/customer/customer-list/customer-list.component';
import { CustomerAddComponent } from './pages/customer/customer-add/customer-add.component';
import { ProductGroupAddComponent } from './pages/product-group/product-group-add/product-group-add.component';
import { ProductGroupListComponent } from './pages/product-group/product-group-list/product-group-list.component';
import { CustomerEditComponent } from './pages/customer/customer-edit/customer-edit.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { ProductGroupEditComponent } from './pages/product-group/product-group-edit/product-group-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    CustomerListComponent,
    CustomerAddComponent,
    ProductGroupAddComponent,
    ProductGroupListComponent,
    CustomerEditComponent,
    ProductEditComponent,
    ProductGroupEditComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
