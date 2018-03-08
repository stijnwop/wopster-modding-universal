/**
 * Created by stijn on 3-7-2016.
 */

import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {WindowRef} from "../providers/window.provider";

@Directive({
    selector: '[trackSticky]'
})

export class StickyDirective {
    private _minY: number = 10;
    private _className: string = 'stick';

    constructor(private _element: ElementRef, private _window: WindowRef) {
    }

    @Input('stickMin') set stickMin(minY: number) {
        this._minY = minY || this._minY;
    }

    @Input('stickClass') set stickClass(className: string) {
        this._className = className || this._className;
    }

    @HostListener('window:scroll', ['$event']) track(event: any) {
        if (this._window.nativeWindow.pageYOffset > this._minY) {
            this._element.nativeElement.classList.add(this._className);
        } else {
            this._element.nativeElement.classList.remove(this._className);
        }
    }
}