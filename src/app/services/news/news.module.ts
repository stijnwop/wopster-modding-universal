/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 27-3-2018
 * Time: 23:58
 */

import {NgModule} from "@angular/core";
import {NewsService} from "./news.service";

@NgModule({
    providers: [
        NewsService,
    ]
})
export class NewsServiceModule {
}