/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 16-3-2018
 * Time: 23:45
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routesProject} from "./project-routing.module";
import {SharedModule} from "../../shared.module";
import {ProjectPageComponent} from "./project-page.component";
import {ProjectListComponent} from "./project-list.component";

@NgModule({
    imports: [
        RouterModule.forChild(routesProject),
        SharedModule
    ],
    declarations: [ProjectPageComponent, ProjectListComponent]
})
export class ProjectModule {
}