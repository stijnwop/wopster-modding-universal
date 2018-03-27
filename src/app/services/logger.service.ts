/**
 * Created by IntelliJ IDEA.
 * User: Stijn Wopereis
 * Date: 27-3-2018
 * Time: 23:01
 */

import {ErrorHandler, Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class Logger {

    constructor(private errorHandler: ErrorHandler) {
    }

    log(value: any, ...arg: any[]) {
        if (!environment.production) {
            console.log(value, ...arg);
        }
    }

    error(error: Error) {
        this.errorHandler.handleError(error);
    }

    warn(value: any, ...arg: any[]) {
        console.warn(value, ...arg);
    }
}