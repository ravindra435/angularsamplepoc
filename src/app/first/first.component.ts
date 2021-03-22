import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styles: []
})
export class FirstComponent implements OnInit {
  public Ename: string;
  public location: string;
  constructor() {
    this.Ename = "ravi";
    this.location = "Hyd"

  }

  ngOnInit(): void {
  }

}
