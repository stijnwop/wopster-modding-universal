/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 16-3-2018
 * Time: 23:57
 */

import {Component, Input} from '@angular/core';
import {ProjectNode} from "../../services/project/project.model";

@Component({
    selector: "project-list",
    template: `
        <div *ngFor="let node of nodes">
            <mat-card class="shared-card">
                <mat-card-header>
                    <div mat-card-avatar class="header-image"></div>
                    <mat-card-title>{{node.name}}</mat-card-title>
                    <mat-card-subtitle>Wopster Modding</mat-card-subtitle>
                </mat-card-header>
                <img mat-card-image src="assets/screen.jpg"
                     alt="">
                <mat-card-actions>
                    <button mat-button>LIKE</button>
                    <button mat-button>SHARE</button>
                </mat-card-actions>
            </mat-card>
        </div>`
})
export class ProjectListComponent {
    @Input() nodes: ProjectNode[];

    constructor() {
    }
}
