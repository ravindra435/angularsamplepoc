import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styles: []
})
export class SecondComponent implements OnInit {
  @ViewChild(FirstComponent, { static: true })

  private _obj: FirstComponent;
  clickMe() {
    this._obj.Ename = "sudheer";
    this._obj.location = "vizag";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
