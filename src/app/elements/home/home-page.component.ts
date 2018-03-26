/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 26-3-2018
 * Time: 21:54
 */

import {Component, OnInit} from '@angular/core';

@Component({
    selector: "",
    template: `
        
        <section style="background-color:#b8d3e6;">
            <wio-carousel></wio-carousel>
        </section>
    `,
})
export class HomePageComponent implements OnInit {

    ngOnInit(): void {
    }

    constructor() {
    }

}