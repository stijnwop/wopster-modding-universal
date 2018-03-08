import {Component, OnInit, Inject, LOCALE_ID} from '@angular/core';

@Component({
    selector: 'wio-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

    constructor(@Inject(LOCALE_ID) protected localeId: string,) {
    }

    ngOnInit() {
    }
}
