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
import {MatTabsModule} from "@angular/material";
import {NewsListComponent} from "../../layout/news-list/news-list.component";
import {NewsServiceModule} from "../../services/news/news.module";

@NgModule({
    imports: [
        RouterModule.forChild(routesHome),
        NguCarouselModule,
        MatTabsModule,
        NewsServiceModule,
        SharedModule
    ],
    declarations: [HomePageComponent, CarouselComponent, NewsListComponent]
})
export class HomeModule {
}