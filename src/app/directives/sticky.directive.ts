/**
 * Created by stijn on 3-7-2016.
 */

import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {WindowRef} from "../providers/window.provider";
import {NavigationStart, Router} from "@angular/router";

@Directive({
    selector: '[trackSticky]'
})

export class StickyDirective {

    private _minY: number = 10;
    private _className: string = 'stick';

    constructor(private _element: ElementRef, private _window: WindowRef,
                private _router: Router) {
        this._router.events.subscribe((val) => {
            if (val instanceof NavigationStart && val.url) {
                this.useStickyDirective = val.url == "/";
                this.onChangeDirectiveClass(this.useStickyDirective);
            }
        });
    }

    /**
     * @param {boolean} change
     */
    private onChangeDirectiveClass(change: boolean): void {
        if (!change) {
            this._element.nativeElement.classList.add(this._className);
        } else {
            this._element.nativeElement.classList.remove(this._className);
        }
    }

    @Input('useStickyDirective')
    useStickyDirective: boolean;

    @Input('stickMin') set stickMin(minY: number) {
        this._minY = minY || this._minY;
    }

    @Input('stickClass') set stickClass(className: string) {
        this._className = className || this._className;
    }

    @HostListener('window:scroll', ['$event']) track(event: any) {
        if (this.useStickyDirective) {
            this.onChangeDirectiveClass(this._window.nativeWindow.pageYOffset < this._minY);
        }
    }
}