/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 1-4-2018
 * Time: 00:09
 */

import {Injectable, OnDestroy} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Doc} from "./doc.model";
import {Logger} from "../logger.service";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs/Subscription";
import {map, tap} from "rxjs/operators";
import {AsyncSubject} from "rxjs/AsyncSubject";
import {Location} from "@angular/common";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {NavigationStart, Router} from "@angular/router";

export const CONTENT_URL_PREFIX = 'generated/docs/';

@Injectable()
export class DocService implements OnDestroy {

    private _docRouteSubscription: Subscription;
    private _cachedDocs = new Map<string, Observable<Doc>>();
    private _urlSubject = new ReplaySubject<string>(1);

    public currentDoc: Observable<Doc>;
    public currentUrl = this._urlSubject.pipe(map(url => this.stripLastUrlPartSlashes(url)));

    constructor(private logger: Logger,
                private httpClient: HttpClient,
                private location: Location,
                private router: Router) {
        // Initial path
        this._urlSubject.next(location.path(true));

        // Listen to route change
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (event.url.startsWith("/docs")) {
                    this._urlSubject.next(event.url || '');
                }
            }
        });

        this._docRouteSubscription = this.currentUrl.subscribe(url => {
            this.currentDoc = this.getDoc(url);
        });
    }

    /**
     * Unsubscribe from subscriptions
     */
    ngOnDestroy(): void {
        this._docRouteSubscription.unsubscribe();
    }

    /**
     * Get the current requested doc from cache
     * @param url
     * @returns {Observable<Doc>}
     */
    private getDoc(url: any) {
        const id = url || 'docs';

        this.logger.log('getting document', id);

        if (!this._cachedDocs.has(id)) {
            this._cachedDocs.set(id, this.fetchDoc(id));
        }

        return this._cachedDocs.get(id)!;
    }

    /**
     * Pops last part of url and stripsSlashes
     * @param {string} url
     * @returns {string}
     */
    private stripLastUrlPartSlashes(url: string) {
        const lastUrlPart = url.split("/").pop();
        return lastUrlPart.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
    }

    /**
     * Fetches the current requested doc
     * @param {string} id
     * @returns {Observable<Doc>}
     */
    private fetchDoc(id: string): Observable<Doc> {
        if (id == "docs") {
            id = "index"; // get index doc
        }

        const requestPath = `${CONTENT_URL_PREFIX}${id}.json`;
        const subject = new AsyncSubject<Doc>();

        this.logger.log('fetching document from', requestPath);

        this.httpClient
            .get<Doc>(requestPath, {responseType: 'json'})
            .pipe(
                tap(data => {
                    if (!data || typeof data !== 'object') {
                        this.logger.log('received invalid data:', data);
                        throw Error('Invalid data');
                    }
                }),
                // Todo: catch error and return not found page/message
                // catchError((error: HttpErrorResponse) => {
                //     return
                // })
            )
            .subscribe(subject);

        return subject.asObservable();
    }
}