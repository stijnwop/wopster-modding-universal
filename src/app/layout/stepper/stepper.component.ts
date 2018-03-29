/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 29-3-2018
 * Time: 20:24
 */

import {Component, Inject, Input} from "@angular/core";
import {NavigationStepNode} from "../../navigation/navigation.model";
import {topMargin} from "../../elements/docs/docs-page.component";
import {DOCUMENT, PlatformLocation} from "@angular/common";

@Component({
    selector: 'wio-stepper',
    template: `
        <mat-vertical-stepper (selectionChange)="stepChanged($event)" [linear]="true"
                              style="background-color:transparent;">
            <mat-step *ngFor="let node of nodes" [attr.data-id]="node.id" [completed]="false" [label]="node.title">
            </mat-step>
        </mat-vertical-stepper>`
})
export class StepperComponent {
    @Input() nodes: NavigationStepNode[];

    private _topOfPageElement: Element;
    private _topOffset: number | null;

    get topOffset() {
        if (!this._topOffset) {
            const toolbar = this.document.querySelector('.app-toolbar');
            this._topOffset = (toolbar && toolbar.clientHeight || 0) + topMargin;
        }
        return this._topOffset!;
    }

    get topOfPageElement() {
        if (!this._topOfPageElement) {
            this._topOfPageElement = this.document.getElementById('top-of-page') || this.document.body;
        }
        return this._topOfPageElement;
    }

    constructor(private location: PlatformLocation, @Inject(DOCUMENT) private document: any,) {
    }

    stepChanged(s: any) {
        this.goTo(s.selectedStep.content.elementRef.nativeElement.parentElement.dataset.id)
    }

    goTo(hash: string): void {
        const element: HTMLElement = hash
            ? this.document.getElementById(hash)
            : this.topOfPageElement;
        this.scrollToElement(element);
    }

    scrollToElement(element: Element | null) {
        if (element) {
            element.scrollIntoView();

            if (window && window.scrollBy) {
                // Scroll as much as necessary to align the top of `element` at `topOffset`.
                // (Usually, `.top` will be 0, except for cases where the element cannot be scrolled all the
                //  way to the top, because the viewport is larger than the height of the content after the
                //  element.)
                window.scrollBy(0, element.getBoundingClientRect().top - this.topOffset);

                // If we are very close to the top (<20px), then scroll all the way up.
                // (This can happen if `element` is at the top of the page, but has a small top-margin.)
                if (window.pageYOffset < 20) {
                    window.scrollBy(0, -window.pageYOffset);
                }
            }
        }
    }
}