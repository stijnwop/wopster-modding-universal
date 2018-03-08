import {AppModule} from "./app.module";
import {NgModule} from "@angular/core";
import {environment} from "../environments/environment";
import {ServiceWorkerModule} from "@angular/service-worker";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
        AppModule
    ],
    bootstrap: [
        AppComponent
    ]
})

export class BrowserModule {
}
