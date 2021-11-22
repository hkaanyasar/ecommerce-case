import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {ProductModel} from "../../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  products: ProductModel[] = [];
  silPop = false;
  deleteId = '';

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe((a:any) => {
      this.products = a;
    });
  }

  deleteBefore(_id: string) {
    this.deleteId = _id;
    this.silPop = true;
  }

  deleteProduct() {
    this.apiService.deleteProduct(this.deleteId).subscribe((a) => {
      this.products = this.products.filter(elm => elm._id != this.deleteId);
      this.silHayir();
    });
  }

  silHayir() {
    this.silPop = false;
    this.deleteId = '';
  }
}
