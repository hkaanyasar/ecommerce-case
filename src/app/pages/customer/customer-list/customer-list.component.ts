import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../../../services/api-service.service";
import {CustomerModel} from "../../../models/customer.model";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {


  constructor(private apiService: ApiServiceService ) { }

  customers: CustomerModel[] = [];
  silPop = false;
  deleteId = '';

  ngOnInit(): void {
    this.apiService.getAllCustomer().subscribe((response: any) => {
      this.customers = response;
    });
  }

  deleteBefore(_id: string) {
    this.deleteId = _id;
    this.silPop = true;
  }

  deleteCustomer() {
    this.apiService.deleteCustomer(this.deleteId).subscribe((a: any) => {
      this.customers = this.customers.filter(elm => elm._id != this.deleteId);
      this.silHayir();
    });
  }

  silHayir() {
    this.silPop = false;
    this.deleteId = '';
  }
}
