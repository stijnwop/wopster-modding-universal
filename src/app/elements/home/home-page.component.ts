/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 26-3-2018
 * Time: 21:54
 */

import {Component, OnInit} from '@angular/core';
import {CarouselNode} from "../../services/domain/carousel.model";
import {NewsNode} from "../../services/news/news.model";
import {NewsService} from "../../services/news/news.service";

@Component({
    selector: "",
    templateUrl: "./home-page.component.html",
})
export class HomePageComponent implements OnInit {

    carouselNodes: CarouselNode[] = [
        {
            path: "assets/store.png",
            alt: "Hose System",
            title: "Did you try the Hose System already?",
            description: "With the hose system you are able to pump a liquid fill type from source to target with different strategies. If applicable you could extend the hose to reach larger ranges.",
            actionText: "Try now",
            actionLink: "https://www.farming-simulator.com/mod.php?lang=en&country=nl&mod_id=91735&title=fs2017",
            blank: true,
            optionalActionText: "or on GitHub",
            optionalActionLink: "https://github.com/stijnwop/hoseSystem"
        },
    ];

    protected newsItems: NewsNode[];

    constructor(private _newsService: NewsService) {
    }

    ngOnInit() {
        this._newsService.getNewsNodes().then(nodes => {
            this.newsItems = nodes
            console.log(this.newsItems)

        });
    }
}