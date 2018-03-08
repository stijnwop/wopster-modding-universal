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
import {NavigationService} from "./navigation/navigation.service";
import {TopMenuComponent} from "./layout/top-menu/top-menu.component";

@NgModule({
    declarations: [
        AppComponent,
        StickyDirective,
        ControlBroadcastComponent,
        TopMenuComponent
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
        NavigationService,

        WindowRef
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
