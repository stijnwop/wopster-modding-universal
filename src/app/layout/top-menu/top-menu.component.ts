import {Component, Input} from '@angular/core';
import {NavigationNode} from "../../navigation/navigation.model";

@Component({
    selector: 'wio-top-menu',
    template: `
        <ul role="navigation">
            <li *ngFor="let node of nodes"><a class="nav-link" [routerLink]="node.url" [title]="node.title">{{ node.title
                }}</a></li>
        </ul>`
})
export class TopMenuComponent {
    @Input() nodes: NavigationNode[];
}