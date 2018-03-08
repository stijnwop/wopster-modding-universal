/**
 * Created by stijn on 26-6-2017.
 */

import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {NguCarouselModule} from "@ngu/carousel";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        NguCarouselModule
    ],
    exports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        NguCarouselModule
    ],
    entryComponents: [
    ]
})

export class SharedModule {
}