/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 26-3-2018
 * Time: 22:09
 */

import {Component, Input} from '@angular/core';
import {NguCarousel} from "@ngu/carousel";
import {CarouselNode} from "../../services/domain/carousel.model";

@Component({
    selector: 'wio-carousel',
    template: `
        <ngu-carousel [inputs]="carouselInputs">
            <ngu-item NguCarouselItem *ngFor="let node of nodes">
                <div class="carousel-ngu-item" [style.background-image]="'url(' + node.path + ')'">
                    <div class="carousel-ngu-item-inner">
                        <div class="carousel-ngu-item-small">
                            <h1>{{node.title}}</h1>
                            <p>{{node.description}}</p>
                            <a mat-raised-button target="{{node.blank ? '_blank' : '_self'}}" [href]="node.actionLink">{{node.actionText}}</a>
                            <span class="clearfix" *ngIf="node.optionalActionLink && node.optionalActionText">
                                <a target="_blank" [href]="node.optionalActionLink">{{node.optionalActionText}}</a>
                            </span>
                        </div>
                    </div>
                </div>
            </ngu-item>
            <a NguCarouselPrev class="leftRs"><i class="material-icons">navigate_before</i></a>
            <a NguCarouselNext class="rightRs"><i class="material-icons">navigate_next</i></a>
        </ngu-carousel>
    `
})
export class CarouselComponent {
    @Input() nodes: CarouselNode[];

    protected carouselInputs: NguCarousel = {
        grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
        slide: 4,
        speed: 500,
        interval: 5000,
        point: {
            visible: true,
            pointStyles: `
          .ngucarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 35px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngucarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .2s ease all;
          }
          .ngucarouselPoint li:hover {
              cursor: pointer;
            }
          .ngucarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
        },
        load: 2,
        custom: 'banner',
        touch: true,
        loop: true,
        easing: 'cubic-bezier(0, 0, 0.2, 1)'
    };
}