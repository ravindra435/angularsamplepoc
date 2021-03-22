import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';




@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    // getEmployee(): any[] {
    //     return [
    //         { Eno: 101, Ename: "ravi", salary: 1234 },
    //         { Eno: 103, Ename: "raju", salary: 4537 },
    //         { Eno: 104, Ename: "jhon", salary: 7274 },
    //         { Eno: 105, Ename: "debnil", salary: 9846 },
    //         { Eno: 106, Ename: "harry", salary: 47366 }

    //     ]
    constructor(private _http: HttpClient) { }
    public getEmployees(): Observable<any> {
        return this._http.get('https://www.w3schools.com/angular/customers.php');
    }
}
