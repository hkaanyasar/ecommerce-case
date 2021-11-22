import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {ProductModel} from "../../../models/product.model";
import {ProductGroupModel} from "../../../models/product-group.model";

@Component({
  selector: 'app-product-group-list',
  templateUrl: './product-group-list.component.html',
  styleUrls: ['./product-group-list.component.scss']
})
export class ProductGroupListComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  productGroups: ProductGroupModel[] = [];
  silPop = false;
  deleteId = '';

  ngOnInit(): void {
    this.apiService.getAllProductGroups().subscribe((a:any) => {
      this.productGroups = a;
    });
  }

  deleteBefore(_id: string) {
    this.deleteId = _id;
    this.silPop = true;
  }

  deleteProduct() {
    this.apiService.deleteProductGroup(this.deleteId).subscribe((response: any) => {
      this.productGroups = this.productGroups.filter(elm => elm._id != this.deleteId);
      this.silHayir();
    });
  }

  silHayir() {
    this.silPop = false;
    this.deleteId = '';
  }
}
