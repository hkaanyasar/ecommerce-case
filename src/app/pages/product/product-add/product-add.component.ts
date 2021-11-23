import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../../models/product.model";
import {ApiServiceService} from "../../../services/api-service.service";
import {ProductGroupModel} from "../../../models/product-group.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(private apiService: ApiServiceService,private router: Router) { }

  model: ProductModel = new ProductModel();
  groups: ProductGroupModel[] = [];
  isAdded = false;

  ngOnInit(): void {
    this.apiService.getAllProductGroups().subscribe((res: any) => {
      this.groups = res;
    });
  }

  saveFn() {
    if(!this.model.name) {
      alert('Ürün adı zorunludur');
      return;
    }
    if(!this.model.productGroupId) {
      alert('Ürün grubu zorunludur');
      return;
    }

    this.apiService.saveProduct(this.model).subscribe((a) => {
      console.log(a);
      this.isAdded = true;
      this.model = new ProductModel();
    })

    console.log(this.model);
  }

}
