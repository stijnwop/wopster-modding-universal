/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 26-3-2018
 * Time: 21:52
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared.module";
import {routesHome} from "./home-routing.module";
import {HomePageComponent} from "./home-page.component";
import {NguCarouselModule} from "@ngu/carousel";
import {CarouselComponent} from "../../layout/carousel/carousel.component";

@NgModule({
    imports: [
        RouterModule.forChild(routesHome),
        NguCarouselModule,
        SharedModule
    ],
    declarations: [HomePageComponent, CarouselComponent]
})
export class HomeModule {
}