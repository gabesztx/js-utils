import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toReadableTime'
})
export class ToReadableTime implements PipeTransform {
    constructor() {
    }

    transform(value: any): any {
        if (!value || typeof value !== 'string') {
            return '0:00:00';
        }

        value = value.replace(/^(-)?0+(?=\d)/, '$1');
        const match = /[0-9]{1,4}:[0-9]{2}:[0-9]{2}/.exec(value);
        return match[0];
    }
}
