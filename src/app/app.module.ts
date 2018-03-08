import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatDialogModule, MatIconModule, MatInputModule, MatSidenavModule,
    MatSnackBarModule, MatToolbarModule
} from "@angular/material";
import {SharedModule} from "./shared.module";
import {StickyDirective} from "./directives/sticky.directive";
import {WindowRef} from "./providers/window.provider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {ControlBroadcastComponent} from "./services/control-broadcast.component";
import {ServiceWorkerModule} from "@angular/service-worker";

@NgModule({
    declarations: [
        AppComponent,
        StickyDirective,
        ControlBroadcastComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'wopster-modding'}),
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
        NoopAnimationsModule,
        HttpClientModule,
        SharedModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatToolbarModule,
        ServiceWorkerModule
    ],
    entryComponents: [
    ],
    providers: [
        WindowRef
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
