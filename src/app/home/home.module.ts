/**
 * Created by stijn on 22-6-2017.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routesHome} from "./home-routing.module";
import {SharedModule} from "../shared.module";
import {HomePageComponent} from "./home-page/home-page.component";

@NgModule({
    imports: [
        RouterModule.forChild(routesHome),
        SharedModule
    ],
    declarations: [HomePageComponent]
})
export class HomeModule {
}