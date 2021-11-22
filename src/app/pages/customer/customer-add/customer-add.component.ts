import { Component, OnInit } from '@angular/core';
import {CustomerModel} from "../../../models/customer.model";
import {Router} from "@angular/router";
import {ApiServiceService} from "../../../services/api-service.service";

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private apiService: ApiServiceService,  private router: Router) { }

  model: CustomerModel = new CustomerModel();
  isAdded = false;
  isEmpty = false;


  ngOnInit(): void {
  }

  saveFn() {
    if(!this.model.name || !this.model.age || !this.model.gsm || !this.model.email || !this.model.tcvkn){
      this.isEmpty  = true;
      return;
    }

    this.isEmpty = false;
    this.apiService.saveCustomer(this.model).subscribe((a) => {
      this.isAdded = true;
      this.model = new CustomerModel();
    })



  }

}
