import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {Router} from "@angular/router";

import {ProductGroupModel} from "../../../models/product-group.model";

@Component({
  selector: 'app-product-group-add',
  templateUrl: './product-group-add.component.html',
  styleUrls: ['./product-group-add.component.scss']
})
export class ProductGroupAddComponent implements OnInit {

  constructor(private apiService: ApiServiceService,private router: Router) { }

  model: ProductGroupModel = new ProductGroupModel();
  isAdded = false;

  ngOnInit(): void {

  }

  saveFn() {
    if(!this.model.name) {
      alert('Grup adı zorunludur');
      return;
    }


    this.apiService.saveProductGroup(this.model).subscribe((a) => {
      console.log(a);
      this.isAdded = true;
      this.model = new ProductGroupModel();
    })

    console.log(this.model);
  }

}
