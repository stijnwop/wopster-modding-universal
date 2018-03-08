import {Component, Inject, LOCALE_ID, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {NavigationNode} from "./navigation/navigation.model";
import {NavigationService} from "./navigation/navigation.service";

@Component({
    selector: 'wio-shell',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    topMenuNodes: NavigationNode[];

    constructor(@Inject(PLATFORM_ID) private platform_id: any,
                @Inject(LOCALE_ID) protected localeId: string,
                private meta: Meta,
                private navigationService: NavigationService) {
    }

    ngOnInit() {
        this.navigationService.navigationViews.subscribe(views => {
            this.topMenuNodes = views['TopBar']  || [];
        });
    }
}
