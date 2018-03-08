import {Component, Inject, LOCALE_ID, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
    selector: 'wio-shell',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(@Inject(PLATFORM_ID) private platform_id: any,
                @Inject(LOCALE_ID) protected localeId: string,
                private meta: Meta,) {
    }

    ngOnInit() {
    }
}
