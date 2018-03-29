/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 29-3-2018
 * Time: 19:17
 */

import {Component, Input} from "@angular/core";
import {NavigationNode} from "../../navigation/navigation.model";

@Component({
    selector: 'wio-expansion-list',
    template: `
        <mat-accordion>
            <mat-expansion-panel *ngFor="let node of nodes" class="mat-elevation-z">
                <mat-expansion-panel-header>
                    <mat-panel-title>{{node.title}}</mat-panel-title>
                    <mat-panel-description>{{node.description}}</mat-panel-description>
                </mat-expansion-panel-header>

                <ul>
                    <li *ngFor="let item of node.children">
                        <a class="link" target="{{item.blank ? '_blank' : '_self'}}" [href]="item.url"
                           [title]="item.tooltip || item.title">{{ item.title }}</a>
                    </li>
                </ul>
            </mat-expansion-panel>
        </mat-accordion>`
})
export class ExpansionListComponent {
    @Input() nodes: NavigationNode[];
}