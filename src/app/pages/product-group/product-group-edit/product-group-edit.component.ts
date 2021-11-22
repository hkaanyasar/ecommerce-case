import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductGroupModel} from "../../../models/product-group.model";

@Component({
  selector: 'app-product-group-edit',
  templateUrl: './product-group-edit.component.html',
  styleUrls: ['./product-group-edit.component.scss']
})
export class ProductGroupEditComponent implements OnInit {

  constructor(private apiService: ApiServiceService,private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param: any) => {
      this.getProductGroup(param.id);
    })
  }

  model: ProductGroupModel = new ProductGroupModel();
  isAdded = false;

  ngOnInit(): void {

  }

  updateFn() {
    if(!this.model.name) {
      alert('Grup adı zorunludur');
      return;
    }


    this.apiService.editProductGroup(this.model).subscribe((a) => {
      console.log(a);
      this.isAdded = true;
      this.model = new ProductGroupModel();
    })

    console.log(this.model);
  }

  private getProductGroup(id: string) {
    this.apiService.getProductGroup(id).subscribe((a:any) => {
      console.log(a);
      this.model = a;
    })
  }
}
