import {SwUpdate} from '@angular/service-worker';
import {OnInit, Component} from "@angular/core";
import {MatSnackBar} from "@angular/material";
import {WindowRef} from "../providers/window.provider";

@Component({
    selector: 'app-control-broadcast',
    template: '',
})
export class ControlBroadcastComponent implements OnInit {

    constructor(private swUpdate: SwUpdate,
                private snackbarRef: MatSnackBar,
                private winRef: WindowRef) {
    }

    ngOnInit() {
        this.swUpdate.available.subscribe(event => {
            console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
            let snackBarRef = this.snackbarRef.open('Newer version of the app is available', 'Refresh');

            snackBarRef.onAction().subscribe(() => {
                this.winRef.nativeWindow.location.reload()
            });
        });
    }
}