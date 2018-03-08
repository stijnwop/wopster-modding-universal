import {Pipe} from "@angular/core";

@Pipe({
    name: 'mapToIterable'
})

export class MapToIterable {
    transform(value, args: string[]): any {
        let keys = [];
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                keys.push({key: key, value: value[key]});
            }
        }
        return keys;
    }
}