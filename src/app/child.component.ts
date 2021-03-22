import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'child',
    templateUrl: './child.component.html',
})

export class childComponent {
    @Input() Eno: number;
    @Input() Ename: string;
    @Input() salary: number;

    @Output() sendEmpData: EventEmitter<any> = new EventEmitter();
    onClick(): any {
        this.sendEmpData.emit(this.Eno + "......" + this.Ename + "....." + this.salary)
    }
}