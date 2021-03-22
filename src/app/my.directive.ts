import { Directive, Input, HostListener, ElementRef } from '@angular/core';


@Directive({
    selector: '[myDir]'
})
export class MyDirective {
    @Input() var_one;

    constructor(private _el: ElementRef) {

    }
    public myFun(arg1) {
        this._el.nativeElement.style.backgroundColor = arg1;
    }
    @HostListener("mouseenter") onmouseenter() {
        this.myFun(this.var_one);
    }

}