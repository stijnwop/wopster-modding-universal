/**
 * Created by stijn on 16-6-2017.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
    transform(value: string, args: string[]) : string {
        let stop = args.length > 0 ? args[0] : '<br>';

        return value.substring(0, value.indexOf(stop));
    }
}