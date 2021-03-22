import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { CountriesService } from '../countries.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-parallel',
  templateUrl: './parallel.component.html',
  styles: []
})
export class ParallelComponent implements OnInit {
  countries: any;
  employees: any;
  constructor(private _serv1: CountriesService, private _serv2: EmployeeService) { }

  ngOnInit(): void {
    Observable.forkJoin([
      this._serv1.getCountries(),
      this._serv2.getEmployees(),
    ]).subscribe((poRes) => {
      this.countries = poRes[0];
      this.employees = poRes[1];
    }, (errRes) => {
      console.log("error occured while processing the request")
    })
  }

}
