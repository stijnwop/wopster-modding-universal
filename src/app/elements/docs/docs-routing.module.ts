/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 28-3-2018
 * Time: 13:48
 */
import {Routes} from "@angular/router";
import {DocsPageComponent} from "./docs-page.component";

export const routesDocs: Routes = [
    {
        path: '',
        component: DocsPageComponent
    },
    {
        path: ':doc',
        component: DocsPageComponent
    }
];
