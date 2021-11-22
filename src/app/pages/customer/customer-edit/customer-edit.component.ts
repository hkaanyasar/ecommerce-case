import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {ActivatedRoute} from "@angular/router";
import {CustomerModel} from "../../../models/customer.model";


@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  constructor(private apiService: ApiServiceService,private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param: any) => {
      this.getCustomer(param.id);
    })
  }

  model: CustomerModel = new CustomerModel();

  isEdited: boolean  = false;
  isEmpty: boolean  = false;

  ngOnInit(): void  {}

  updateFn() {
    if(!this.model.name || !this.model.age || !this.model.gsm || !this.model.email || !this.model.tcvkn){
      this.isEmpty  = true;
      return;
    }

    this.apiService.editCustomer(this.model).subscribe((res: any) => {
      console.log(res);
      this.isEdited = true;
    })

    console.log(this.model);
  }


  private getCustomer(id: string) {
    this.apiService.getCustomer(id).subscribe((res: any) => {
      console.log(res);
      this.model = res;
    })
  }
}
