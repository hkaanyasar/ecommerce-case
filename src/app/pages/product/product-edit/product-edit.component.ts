import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../../models/product.model";
import {ProductGroupModel} from "../../../models/product-group.model";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  constructor(private apiService: ApiServiceService,private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param: any) => {
      this.getProduct(param.id);
    })
  }

  model: ProductModel = new ProductModel();

  groups: ProductGroupModel[] = [];
  isEdited: boolean  = false;

  ngOnInit(): void {

    this.apiService.getAllProductGroups().subscribe((res: any) => {
      this.groups = res;
    });
  }


  updateFn() {
    if(!this.model.name) {
      alert('Ürün adı zorunludur');
      return;
    }
    if(!this.model.productGroupId) {
      alert('Ürün grubu zorunludur');
      return;
    }

    this.apiService.editProduct(this.model).subscribe((a: any) => {
      console.log(a);
      this.isEdited = true;
    })

    console.log(this.model);
  }


  private getProduct(id: string) {
    this.apiService.getProduct(id).subscribe((a:any) => {
      console.log(a);
      this.model = a;
    })
  }
}
