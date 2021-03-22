import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: []
})
export class ParentComponent implements OnInit {


  public Employees: Array<any> = [
    { Eno: 100, Ename: 'ravi', salary: 18000 },
    { Eno: 101, Ename: 'rk', salary: 1234 },
    { Eno: 103, Ename: 'harry', salary: 14500 },
    { Eno: 120, Ename: 'malli', salary: 18030 },
    { Eno: 1020, Ename: 'hello', salary: 12000 },
  ];
  public Emp: any;

  myFun(data) {
    this.Emp = data;
    console.log(data)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
