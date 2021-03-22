import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { onErrorResumeNext } from 'rxjs';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: Array<any>;

  order: string = 'info.name';
  reverse: boolean = false;
  totalRecords: number;
  page: number = 1;
  term: string;
  sortedCollection: any[];

  constructor(private _serve: CountriesService, orderPipe: OrderPipe) {

    this.countries = this.sortedCollection;
    this.sortedCollection = orderPipe.transform(this.countries, 'info.name');
    console.log(this.sortedCollection);

  }

  str: string = "";
  sortColumn: string = "population";
  // order: number = 1;

  ngOnInit(): void {
    this._serve.getCountries().subscribe((responce) => {
      this.countries = responce;
      console.log(this.countries)
      this.totalRecords = this.countries.length;
    }, (errRes: HttpErrorResponse) => {
      if (errRes.error instanceof Error) {
        console.log("Client side Error");
      }
      else {
        console.log("Server side Error");
      }
    })
  }
  onDeleteClick(x) {
    if (confirm("Are you sure what to delete this file?")) {
      this.countries.splice(x, 1)
    }
  }
  // onSortClick() {
  //   this.sortedCollection = this.countries.sort((emp1, emp2) => {
  //     var n = 0;
  //     if (this.sortColumn == "population") {
  //       return (emp1[this.sortColumn] - emp2[this.sortColumn]) * this.order;
  //     } else if (this.sortColumn == "name") {
  //       return (emp1[this.sortColumn].charCodeAt(0) - emp2[this.sortColumn].charCodeAt(0)) * this.order;
  //     } else if (this.sortColumn == "capital") {
  //       return (emp1[this.sortColumn].charCodeAt(0) - emp2[this.sortColumn].charCodeAt(0)) * this.order;
  //     }
  //   })
  // }




  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
