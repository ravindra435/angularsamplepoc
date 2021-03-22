import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: []
})
export class SeriesComponent implements OnInit {
  countries: any;
  employees: any;
  constructor(private _serv1: CountriesService, private _serv2: EmployeeService) { }

  ngOnInit(): void {
    this._serv1.getCountries().subscribe((poRes) => {
      this.countries = poRes;
      this._serv2.getEmployees().subscribe((poRes) => {
        this.employees = poRes;
      }, (errRes) => {
        console.log("error occured while processing the request")
      })
    }, (errRes) => {
      console.log("error occured while processing the request")
    })

  }

}
