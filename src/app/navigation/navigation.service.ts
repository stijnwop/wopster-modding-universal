import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {NavigationStepViews, NavigationViews} from "./navigation.model";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map'

// Read from json perhaps in the future
const NAVIGATION_PATH = "/assets/navigation.json";

@Injectable()
export class NavigationService {

    navigationViews: Observable<NavigationViews>;
    navigationStepViews: Observable<NavigationStepViews>;

    constructor(private http: HttpClient) {
        const navigationInfo = this.fetchNavigationInfo();
        this.navigationViews = this.getNavigationViews(navigationInfo);
        this.navigationStepViews = this.getNavigationSteps(navigationInfo);
    }

    private fetchNavigationInfo(): Observable<any> {
        return this.http.get<any>(NAVIGATION_PATH);
    }

    private getNavigationViews(navigationInfo: Observable<any>): Observable<NavigationViews> {
        return navigationInfo.map(response => {
            const views = Object.assign({}, response);
            Object.keys(views).forEach(key => {
                if (key[0] === '_') {
                    delete views[key];
                }
            });
            return views as NavigationViews;
        });
    }

    private getNavigationSteps(navigationInfo: Observable<any>): Observable<NavigationStepViews> {
        return navigationInfo.map(response => {
            const views = Object.assign({}, response);
            Object.keys(views).forEach(key => {
                if (key[0] === '_') {
                    delete views[key];
                }
            });
            return views as NavigationStepViews;
        });
    }
}