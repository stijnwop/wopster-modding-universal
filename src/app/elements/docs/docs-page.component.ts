import {Component, OnInit} from "@angular/core";
import {NavigationNode, NavigationStepNode} from "../../navigation/navigation.model";
import {NavigationService} from "../../navigation/navigation.service";
import {DocService} from "../../services/docs/doc.service";
import {Doc} from "../../services/docs/doc.model";

/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 28-3-2018
 * Time: 13:48
 */

export const topMargin = 16;

@Component({
    selector: "",
    template: `
        <section class="section">
            <mat-sidenav-container class="section example-container">
                <mat-sidenav class="example-sidenav" #sidenav mode="side" [fixedInViewport]="true" [fixedTopGap]="80">
                    <wio-expansion-list [nodes]="docMenuNodes"></wio-expansion-list>
                </mat-sidenav>
                <mat-sidenav-content class="example-sidenav-content">
                    <div class="doc-view">
                        <wio-doc-viewer [doc]="currentDoc"></wio-doc-viewer>
                    </div>

                    <div>
                        <wio-stepper [nodes]="docStepNodes"></wio-stepper>
                    </div>

                    <p>
                        <button mat-button (click)="sidenav.toggle()">sidenav.toggle()</button>
                    </p>
                </mat-sidenav-content>
            </mat-sidenav-container>

        </section>
    `,
})
export class DocsPageComponent implements OnInit {

    private _docMenuNodes: NavigationNode[];
    private _docStepNodes: NavigationStepNode[];

    currentDoc: Doc;

    get docMenuNodes(): NavigationNode[] {
        return this._docMenuNodes;
    }

    get docStepNodes(): NavigationStepNode[] {
        return this._docStepNodes;
    }

    constructor(private _navigationService: NavigationService,
                private _docService: DocService) {
    }

    ngOnInit() {
        this._navigationService.navigationViews.subscribe(views => {
            this._docMenuNodes = views['DocSideBar'] || [];
        });

        this._navigationService.navigationStepViews.subscribe(views => {
            this._docStepNodes = views['DocSteps'] || [];
        });

        this._docService.currentDoc.subscribe(doc => this.currentDoc = doc);
    }
}