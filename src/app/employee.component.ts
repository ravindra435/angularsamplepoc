
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
    selector: 'employee',

    templateUrl: './employee.component.html',
    styles: [],

})

export class EmployeeComponent {
    Employees: any[];
    constructor(private _serv: EmployeeService) {

    }

    ngOnInit(): void {
        this._serv.getEmployees().subscribe((responce) => {
            this.Employees = responce;
        }, (errRes: HttpErrorResponse) => {
            if (errRes.error instanceof Error) {
                console.log("Client side Error");
            }
            else {
                console.log("Server side Error");
            }
        })
    }

}