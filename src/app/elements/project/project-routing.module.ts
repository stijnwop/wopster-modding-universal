/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 17-3-2018
 * Time: 00:08
 */

import {Routes} from "@angular/router";
import {ProjectListComponent} from "./project-list.component";

export const routesProject: Routes = [
    {
        path: '',
        component: ProjectListComponent
    }
];
