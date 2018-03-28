/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 27-3-2018
 * Time: 20:37
 */
import {Component, Input} from "@angular/core";
import {NewsNode} from "../../services/news/news.model";

@Component({
    selector: 'wio-news-list',
    template: `
        <div class="fixed-width mb1" *ngFor="let node of nodes">
            <a class="news-card-item" [routerLink]="node.path" [title]="node.title">
                <mat-card class="news-card">
                    <img mat-card-image [src]="'assets/' + node.images[0].path" [alt]="node.images[0].alt">
                    <div *ngIf="getIsNew(node.created)" class="ribbon ribbon-top-left"><span>New</span></div>
                    <mat-card-header>
                        <div mat-card-avatar class="news-card-header-image"></div>
                        <mat-card-title class="news-card-title">{{node.title}}</mat-card-title>
                        <mat-card-subtitle>{{node.created | date: 'dd/MM/yyyy hh:mm'}}</mat-card-subtitle>
                    </mat-card-header>
                    <mat-card-content>
                        <p>
                            {{node.content}}
                        </p>
                    </mat-card-content>
                    <mat-card-actions>
                        <a mat-button [routerLink]="node.path" [title]="node.title">READ MORE</a>
                    </mat-card-actions>
                </mat-card>
            </a>
        </div>`
})
export class NewsListComponent {
    @Input() nodes: NewsNode[];

    private readonly todayDate: Date = new Date();

    /**
     * Check if the difference between created news date and current date is smaller then the threshold
     * @param {string} createdDate
     * @param threshold
     * @returns {boolean}
     */
    private getIsNew(createdDate: string, threshold: number = 7): boolean {
        const diff = Math.abs(this.todayDate.getTime() - new Date(createdDate).getTime());
        const diffInDays = Math.ceil(diff / (1000 * 3600 * 24));

        return diffInDays < threshold;
    }
}