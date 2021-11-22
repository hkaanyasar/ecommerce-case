import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";
import {HttpClient} from "@angular/common/http";
import {ProductGroupModel} from "../models/product-group.model";
import {CustomerModel} from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseApi = 'https://fe-egitim-back-h997e.ondigitalocean.app/api/';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.baseApi + 'product');
  }

  saveProduct(product: ProductModel) {
    return this.http.post(this.baseApi + 'product', product);
  }

  editProduct(product: ProductModel) {
    return this.http.put(this.baseApi + 'product/' + product._id, product);
  }

  deleteProduct(productId: string) {
    return this.http.delete(this.baseApi + 'product/' + productId);
  }

  getProduct(id: string) {
    return this.http.get(this.baseApi + 'product/' + id);
  }



  getAllProductGroups() {
    return this.http.get(this.baseApi + 'productGroup');
  }

  saveProductGroup(product: ProductGroupModel) {
    return this.http.post(this.baseApi + 'productGroup', product);
  }

  editProductGroup(product: ProductGroupModel) {
    return this.http.put(this.baseApi + 'productGroup/' + product._id, product);
  }

  deleteProductGroup(productGroupId: string) {
    return this.http.delete(this.baseApi + 'productGroup/' + productGroupId);
  }

  getProductGroup(id: string) {
    return this.http.get(this.baseApi + 'productGroup/' + id);
  }






  getAllCustomer() {
    return this.http.get(this.baseApi + 'Customer');
  }

  saveCustomer(Customer: CustomerModel) {
    return this.http.post(this.baseApi + 'Customer', Customer);
  }

  editCustomer(Customer: CustomerModel) {
    return this.http.put(this.baseApi + 'Customer/' + Customer._id, Customer);
  }

  deleteCustomer(CustomerId: string) {
    return this.http.delete(this.baseApi + 'Customer/' + CustomerId);
  }

  getCustomer(id: string) {
    return this.http.get(this.baseApi + 'Customer/' + id);
  }









}
