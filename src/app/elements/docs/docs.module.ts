/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 28-3-2018
 * Time: 13:47
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared.module";
import {DocsPageComponent} from "./docs-page.component";
import {routesDocs} from "./docs-routing.module";
import {MatCheckboxModule, MatExpansionModule, MatSidenavModule, MatStepperModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ExpansionListComponent} from "../../layout/expansion-list/expansion-list.component";
import {StepperComponent} from "../../layout/stepper/stepper.component";
import {DocViewerComponent} from "../../layout/doc-viewer/doc-viewer.component";
import {DocService} from "../../services/docs/doc.service";

@NgModule({
    imports: [
        RouterModule.forChild(routesDocs),
        SharedModule,
        FormsModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatStepperModule,
        MatSidenavModule
    ],
    providers: [
        DocService
    ],
    declarations: [DocsPageComponent, ExpansionListComponent, DocViewerComponent, StepperComponent]
})
export class DocsModule {
}